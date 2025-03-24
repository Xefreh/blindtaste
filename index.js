document.addEventListener("DOMContentLoaded", function () {
  // Menu data for all three menu options
  const menuData = {
    "Voyager Journey": {
      title: "Voyager Journey",
      price: "$75 per person",
      description:
        "A 5-course global adventure featuring random dishes from across continents. Each course presents contrasting textures and complementary flavors to challenge your palate. Includes one non-alcoholic sensory beverage.",
      image: "imgs/voyager-dish.png",
      alt: "Voyager Journey Menu",
    },
    "Enigma Experience": {
      title: "Enigma Experience",
      price: "$95 per person",
      description:
        "Our signature 7-course tasting menu that plays with temperature contrasts, unexpected ingredient pairings, and molecular gastronomy techniques. Includes guided aroma experiences between courses and wine pairings.",
      image: "imgs/enigma-dish.png",
      alt: "Enigma Experience Menu",
    },
    "Chef's Roulette": {
      title: "Chef's Roulette",
      price: "$120 per person",
      description:
        "Our most adventurous 10-course menu where each dish is a complete surprise. Featuring rare ingredients, avant-garde cooking techniques, and playful presentations that you'll feel but never see. Premium drink pairings included.",
      image: "imgs/roulette-dish.png",
      alt: "Chef's Roulette Menu",
    },
  };

  // Get reference to menu section container
  const menuSection = document.getElementById("menu-section");

  // Get all menu tabs
  const menuTabs = document.querySelectorAll(".menu-tab");

  // Function to create a menu item
  function createMenuItem(menuData) {
    // Create the main container for the menu item
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    // Create and append the image container
    const menuImage = document.createElement("div");
    menuImage.className = "menu-image";

    const img = document.createElement("img");
    img.src = menuData.image;
    img.alt = menuData.alt;
    menuImage.appendChild(img);
    menuItem.appendChild(menuImage);

    // Create and append the menu info section
    const menuInfo = document.createElement("div");
    menuInfo.className = "menu-info";

    const title = document.createElement("h3");
    title.textContent = menuData.title;
    menuInfo.appendChild(title);

    const price = document.createElement("div");
    price.className = "menu-price";
    price.textContent = menuData.price;
    menuInfo.appendChild(price);

    const description = document.createElement("p");
    description.textContent = menuData.description;
    menuInfo.appendChild(description);

    menuItem.appendChild(menuInfo);

    return menuItem;
  }

  // Function to update menu display based on selected tab
  function updateMenuDisplay(selectedMenuName) {
    // Clear current menu items
    menuSection.innerHTML = "";

    // Get the data for the selected menu
    const selectedMenu = menuData[selectedMenuName];

    if (selectedMenu) {
      // Create and append the new menu item
      const menuItem = createMenuItem(selectedMenu);
      menuSection.appendChild(menuItem);
    }
  }

  // Add click event listeners to all menu tabs
  menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      menuTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Update menu display
      updateMenuDisplay(tab.textContent);
    });
  });

  // Initialize with the first menu (already marked as active in HTML)
  const activeTab = document.querySelector(".menu-tab.active");
  if (activeTab) {
    updateMenuDisplay(activeTab.textContent);
  }
});
