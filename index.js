const navBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
const nav = document.querySelector(".main-nav");
const arrow = document.querySelector(".arrow");
const mapSection = document.getElementById('map-section')
navBtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
  console.log("click");
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    nav.classList.add("fixed-navbar");
  } else {
    nav.classList.remove("fixed-navbar");
  }
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1200) {
    arrow.classList.add("show-arrow");
  } else {
    arrow.classList.remove("show-arrow");
  }
});


