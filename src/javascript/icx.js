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
  var mytok = confirm(" ! GO BACK TO CLICK 'ok' 🚫");
  if (mytok === true) {
    window.history.back();
  }
    document.getElementById('content').innerHTML = "<p style='color: red;'>No file specified in URL 🫥.</p>";
}

function opencomment() {
  var filename = window.location.href;
    let comment = prompt("Please enter your comment:");
    if (comment) {
        const subject = `Comment on ${filename}`;
        const body = `${comment}\n\n${filename}.`;
        const mailtoLink = `mailto:icx.sms@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    } else {
        alert("Please enter a comment.");
    }
}

function callBord(board) {
 const element = document.getElementById(board);
if (element) {
    element.style.display = 'block';
    window.location.href = `#${board}`;
}
}