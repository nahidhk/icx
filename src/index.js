async function displayData() {
    try {
        const response = await fetch("/data/data/data.json");
        const data = await response.json();
        const dataContainer = document.getElementById('app');

        if (!dataContainer) {
            throw new Error("Element with id 'data-container' not found.");
        }

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
            <div style="background-color: #fff;color: #000;border: 1px solid #000;border-radius: 9px;margin: 10px;padding: 13px;"><h1>${item.title}</h1><p>${item.about}</p>
            <div>${item.html}</div>
            
            `;

            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('data error', error);
    }
}
displayData();
let openNav = `<nav style="" class="nav main"><span class="title new" id="title"></span></nav>`;
document.write(openNav);
document.getElementById("title").innerHTML="IC Xpert";