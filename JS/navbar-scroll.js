const nav = document.querySelector(".navbar");

function navScroll() {
  nav.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", navScroll);
