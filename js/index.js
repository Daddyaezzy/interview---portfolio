function toggleMenu() {
  // Get the hamburger icon and menu elements
  var hamburgerIcon = document.querySelector(".hamburger i");

  var menu = document.querySelector(".nav__list");

  // Toggle the 'active' class on the menu element
  menu.classList.toggle("active");

  // Toggle the 'fa-bars' and 'fa-times' classes on the hamburger icon
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
}
