const fetch = require('node-fetch');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, about, code } = req.body;

    // GitHub credentials
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Store your token securely in Vercel environment variables
    const REPO = 'nahidhk/icx';
    const FILE_PATH = 'data/data/data.json';

    // Fetch existing file content to update
    const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const fileData = await fileRes.json();
    const fileContent = Buffer.from(fileData.content, 'base64').toString();

    // Update file with new data
    const newContent = JSON.parse(fileContent);
    newContent.push({ title, about, code });

    const updatedContent = Buffer.from(JSON.stringify(newContent, null, 2)).toString('base64');

    // Push new content to GitHub
    const updateRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Update data.json with new data`,
        content: updatedContent,
        sha: fileData.sha,
      }),
    });

    const updateData = await updateRes.json();
    if (updateData.commit) {
      res.status(200).json({ success: true, message: 'Data pushed to GitHub' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to push data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
