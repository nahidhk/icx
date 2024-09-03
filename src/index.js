async function displayData() {
    try {
        const response = await fetch("/public/data.json");
        const data = await response.json();
        const dataContainer = document.getElementById('root');

        if (!dataContainer) {
            throw new Error("Element with id 'data-container' not found.");
        }

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
          
            `;
            dataContainer.appendChild(itemElement);

            // Add event listener to the dynamically created element
            itemElement.querySelector('.item-link').addEventListener('click', () => openInNewTab(item.link));
        });
    } catch (error) {
        console.error('data error', error);
    }
}
