export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { title, about, code } = req.body;
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        const REPO = 'nahidhk/icx';
        const FILE_PATH = 'data/data/data.json';
  
        // Fetch the current file content from GitHub
        const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
  
        if (!fileRes.ok) {
          throw new Error(`GitHub API error: ${fileRes.statusText}`);
        }
  
        const fileData = await fileRes.json();
        const fileContent = Buffer.from(fileData.content, 'base64').toString();
        const newContent = JSON.parse(fileContent);
        newContent.push({ title, about, code });
  
        const updatedContent = Buffer.from(JSON.stringify(newContent, null, 2)).toString('base64');
  
        // Update the file content on GitHub
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
  
        if (!updateRes.ok) {
          throw new Error(`GitHub API update error: ${updateRes.statusText}`);
        }
  
        const updateData = await updateRes.json();
        res.status(200).json({ success: true, message: 'Data pushed to GitHub' });
  
      } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  