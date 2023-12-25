// header

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.style.backgroundColor =
    window.pageYOffset > 16 ? "#FFF" : "transparent";
  header.style.padding = window.pageYOffset > 16 ? "1rem 2rem" : "2rem";
  header.style.boxShadow =
    window.pageYOffset > 16
      ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      : "0 0 #0000";
});

// navbar

const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");
const navbarSection = document.getElementById("mobile-navbar");

openNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  navbarSection.classList.remove("left-[150%]");
  navbarSection.classList.add("left-0");
});

closeNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  navbarSection.classList.remove("left-0");
  navbarSection.classList.add("left-[150%]");
});

// carousel

const carousel = document.getElementById("products-carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slide = document.querySelector(".slide");

prevBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft -= slideWidth + 32;
});

nextBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft += slideWidth + 32;
});
