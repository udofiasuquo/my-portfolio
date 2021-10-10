// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
 

// Scroll to top selection/functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth",
  });
});
 

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
link.addEventListener("click", () => {
  ul.classList.remove("show");
  })
);

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
 

// Close hamburger menu when a link is clicked
 

// scroll to top functionality
 