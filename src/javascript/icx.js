function getFilenameFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('file'); 
}

const filename = getFilenameFromUrl();

if (filename) {
    fetch('/article/' + filename)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(markdown => {
           
            document.getElementById('content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('Error loading Markdown file:', error);
            document.getElementById('content').innerHTML = "<p style='color: red;'>Error loading file.</p>";
        });
} else {
    document.getElementById('content').innerHTML = "<p style='color: red;'>No file specified in URL.</p>";
}
function opencomment(){
    let comment = prompt("Please enter your comment:");
    if (comment) {
        window.location.href = `mailto:icx.sms@gmail.com?subject=Comment on ${filename}?body=${comment}\n\n  ${filename}.\n\n`;
    } else {
        alert("Please enter a comment.");
    }
}