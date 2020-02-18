function toggleSearch() {
    let searchItems = document.getElementById("search-drop-down");
    searchItems.classList.toggle("hidden");
}

function toggleMenu() {
    let menuItems = document.getElementById("menu-drop-down")
    menuItems.classList.toggle("hidden");
}

const searchToggle = document.getElementById("search");
searchToggle.onclick = toggleSearch;

const menuToggle = document.getElementById("menu");
menuToggle.onclick = toggleMenu;