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
const navLinks = document.getElementsByClassName("nav-link");

function closeNav() {
  document.body.style.overflowY = "auto";
  navbarSection.classList.remove("left-0");
  navbarSection.classList.add("left-[150%]");
}

openNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  navbarSection.classList.remove("left-[150%]");
  navbarSection.classList.add("left-0");
});

closeNavbar.addEventListener("click", closeNav);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", closeNav);
}

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

// review carousel

const reviewCarousel = document.getElementById("review-carousel");
const prevBtnReview = document.getElementById("prev-review");
const nextBtnReview = document.getElementById("next-review");
const slideReview = document.querySelector(".review-slide");

prevBtnReview.addEventListener("click", () => {
  const slideWidth = slideReview.clientWidth;
  reviewCarousel.scrollLeft -= slideWidth + 48;
});

nextBtnReview.addEventListener("click", () => {
  const slideWidth = slideReview.clientWidth;
  reviewCarousel.scrollLeft += slideWidth + 48;
});

// faq

const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const expandBtn = document.getElementsByClassName("expand-btn");
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    if (answer[i].classList.contains("max-h-0")) {
      expandBtn[i].classList.remove("ph-caret-down");
      expandBtn[i].classList.add("ph-caret-up");
      answer[i].classList.remove("max-h-0", "pt-0");
      answer[i].classList.add("max-h-[11rem]", "lg:max-h-[5rem]", "pt-6");
    } else {
      expandBtn[i].classList.remove("ph-caret-up");
      expandBtn[i].classList.add("ph-caret-down");
      answer[i].classList.remove("max-h-[11rem]", "lg:max-h-[5rem]", "pt-6");
      answer[i].classList.add("max-h-0", "pt-0");
    }
  });
}

// to top
const toTop = document.getElementsByClassName("to-top");

for (let i = 0; i < toTop.length; i++) {
  toTop[i].addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
