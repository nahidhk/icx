console.log("Hello, world!");



function callTheopt() {
  alert("asiya ")
}


fetch('/article/icx.json')
  .then(response => response.json())
  .then(data => {
    let tableBody = document.getElementById('filein'); 
    tableBody.innerHTML = ''; 
    
    data.forEach(item => {
      let row = document.createElement('div'); 
      let cell = document.createElement('div');
      cell.innerHTML = `<li><div onclick='callme("/article/?file=${item.file}")' class="frem"><b>(${item.title})</b> <br> <a>Click to Read More Readme File</a> <br> <small>${item.date}</small></div></li>`; 
      row.appendChild(cell); 
      tableBody.appendChild(row); 
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
  function callme(url) {
    window.open(url, '_self');
  }