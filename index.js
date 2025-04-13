function creatingDropDownMenu(idOfBox, idOfButton, gapBetweenTextsPx, arrayOfDropDownNames){
    const container = document.getElementById(idOfBox)
    const button = document.getElementById(idOfButton)
    let isOpen = false
    let sharedContainer; 

    container.style.display = 'inline-block'
    let containerWidth = container.clientWidth

    button.addEventListener('click', () => {
        if (isOpen) {
            sharedContainer.remove();
            isOpen = false;
        } else {
            sharedContainer = document.createElement('div');
            sharedContainer.style.position = 'absolute';

            // Get container dimensions
            const containerRect = container.getBoundingClientRect();

            // Dynamically calculate dropdown width based on container or content
            const dropdownWidth = containerRect.width
            sharedContainer.style.width = `${dropdownWidth}px`;

            // Center dropdown horizontally relative to the container
            sharedContainer.style.left = `${containerRect.left + (containerRect.width / 2) - (dropdownWidth / 2)}px`;

            // Position dropdown below the container
            sharedContainer.style.top = `${containerRect.bottom + window.scrollY}px`;

            // Style the dropdown
            sharedContainer.style.display = 'flex';
            sharedContainer.style.flexDirection = 'column';
            sharedContainer.style.alignItems = 'center';
            sharedContainer.style.gap = `${gapBetweenTextsPx}px`;
            sharedContainer.classList.add('dropdown-menu-element-container');

            // Add dropdown elements
            for (let i = 0; i < arrayOfDropDownNames.length; i++) {
                const elementOfDropDownMenu = document.createElement('div');
                elementOfDropDownMenu.textContent = arrayOfDropDownNames[i];
                elementOfDropDownMenu.classList.add('dropdown-menu-element');
                sharedContainer.appendChild(elementOfDropDownMenu);
            }

            // Append dropdown to the container
            container.appendChild(sharedContainer);
            isOpen = true;
        }
    })
}
creatingDropDownMenu('box', 'btn', 10, ['Home', 'Contact', 'Work'])