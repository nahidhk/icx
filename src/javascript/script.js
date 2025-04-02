console.log("Hello, world!");



function callTheopt() {
  const callWiki = confirm("The Ariticle post is a Github page Wiki page , comment on the page to get the link to the page");
  if (callWiki === true) {
    window.open("https://github.com/nahidhk/icx/wiki");
  }
}


fetch('/article/icx.json')
  .then(response => response.json())
  .then(data => {
    let tableBody = document.getElementById('filein'); 
    tableBody.innerHTML = ''; 
    
    data.forEach(item => {
      let row = document.createElement('li'); 
      let cell = document.createElement('li');
      cell.innerHTML = `<b>(${item.title})</b>`; 
      row.appendChild(cell); 
      tableBody.appendChild(row); 
    });
  })
  .catch(error => console.error('Error loading JSON:', error));