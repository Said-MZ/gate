//arrow top

const arrow = document.querySelector(".arrow-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrow.style.opacity = "1";
  } else {
    arrow.style.opacity = "0";
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// mobile navbar

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mob-nav-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});