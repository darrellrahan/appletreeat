// header

const header = document.getElementById("header");
const navLinksDesktop = document.getElementsByClassName("nav-link-desktop");
const line = document.getElementById("header-line");
const cartBtn = document.getElementById("cart-btn");

for (let i = 0; i < navLinksDesktop.length; i++) {
  navLinksDesktop[i].classList.add("after:bg-white");
}

window.addEventListener("scroll", () => {
  for (let i = 0; i < navLinksDesktop.length; i++) {
    navLinksDesktop[i].classList.remove(
      window.pageYOffset > 16 ? "after:bg-white" : "after:bg-black"
    );
    navLinksDesktop[i].classList.add(
      window.pageYOffset > 16 ? "after:bg-black" : "after:bg-white"
    );
  }
  line.style.backgroundColor = window.pageYOffset > 16 ? "#000" : "#FFF";
  cartBtn.style.borderColor = window.pageYOffset > 16 ? "#000" : "#FFF";
  cartBtn.style.color = window.pageYOffset > 16 ? "#000" : "#FFF";
  header.style.color = window.pageYOffset > 16 ? "#000" : "#FFF";
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
  navbarSection.classList.remove("right-0", "p-8");
  navbarSection.classList.add("right-[150%]", "p-0");
}

openNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  navbarSection.classList.remove("right-[150%]", "p-0");
  navbarSection.classList.add("right-0", "p-8");
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

// feature
const featureCard = document.getElementsByClassName("feature-card");
const featureTitle = document.getElementsByClassName("feature-title");
const featureBody = document.getElementsByClassName("feature-body");
const featureButton = document.getElementById("feature-button");

function otherCards() {
  for (let i = 0; i < featureCard.length; i++) {
    featureCard[i].classList.remove("lg:col-span-2", "bg-[#DFA878]");
    featureCard[i].classList.add(
      "bg-[linear-gradient(25deg,rgba(223,168,120,0.25)_0%,rgba(255,255,255,1)_40%,rgba(255,255,255,1)_60%,rgba(223,168,120,0.25)_100%)]"
    );
    featureTitle[i].classList.remove("text-white");
    featureTitle[i].classList.add("text-[#DFA878]");
    featureBody[i].classList.remove("text-white");
    featureBody[i].classList.add("text-[#7c7c7c]");
  }
}

for (let i = 0; i < featureCard.length; i++) {
  featureCard[i].addEventListener("click", () => {
    otherCards();
    if (i === 0) {
      featureButton.classList.remove("bg-[#DFA878]", "text-white");
      featureButton.classList.add("bg-white", "text-black");
    } else {
      featureButton.classList.remove("bg-white", "text-black");
      featureButton.classList.add("bg-[#DFA878]", "text-white");
    }
    featureCard[i].classList.remove(
      "bg-[linear-gradient(25deg,rgba(223,168,120,0.25)_0%,rgba(255,255,255,1)_40%,rgba(255,255,255,1)_60%,rgba(223,168,120,0.25)_100%)]"
    );
    featureCard[i].classList.add("lg:col-span-2", "bg-[#DFA878]");
    featureTitle[i].classList.remove("text-[#DFA878]");
    featureTitle[i].classList.add("text-white");
    featureBody[i].classList.remove("text-[#7c7c7c]");
    featureBody[i].classList.add("text-white");
  });
}
