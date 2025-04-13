export default function creatingDropDownMenu(
  idOfBox,
  idOfButton,
  gapBetweenTextsPx = 10,
  arrayOfDropDownNames = []
) {
  const container = document.getElementById(idOfBox);
  const button = document.getElementById(idOfButton);
  let isOpen = false;
  let sharedContainer;

  if (!container || !button) {
    console.error("Container or button not found. Check the provided IDs.");
    return;
  }

  container.style.display = "inline-block";

  // Function to create dropdown elements
  function createDropdownElements(names) {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-menu-element-container");
    dropdown.style.position = "absolute";
    dropdown.style.display = "flex";
    dropdown.style.flexDirection = "column";
    dropdown.style.alignItems = "center";
    dropdown.style.gap = `${gapBetweenTextsPx}px`;

    names.forEach((name) => {
      const element = document.createElement("div");
      element.textContent = name;
      element.classList.add("dropdown-menu-element");
      dropdown.appendChild(element);
    });

    return dropdown;
  }

  // Function to position the dropdown
  function positionDropdown(dropdown) {
    const containerRect = container.getBoundingClientRect();
    const dropdownWidth = containerRect.width;

    dropdown.style.width = `${dropdownWidth}px`;
    dropdown.style.left = `${
      containerRect.left + containerRect.width / 2 - dropdownWidth / 2
    }px`;
    dropdown.style.top = `${containerRect.bottom + window.scrollY}px`;
  }

  // Toggle dropdown visibility
  button.addEventListener("click", () => {
    if (isOpen) {
      sharedContainer.remove();
      isOpen = false;
    } else {
      sharedContainer = createDropdownElements(arrayOfDropDownNames);
      positionDropdown(sharedContainer);
      container.appendChild(sharedContainer);
      isOpen = true;
    }
  });
}

