const navbar = document.querySelector(".navbar");

const navBtn = document.querySelector(".navbar-btn");
let navOpen = false;

const navTagBtn = document.querySelector(".navbar__tag");

function navBtnClick() {
  if (navOpen != true) {
    navBtn.classList.add("open");
    navOpen = true;
    navTagBtn.classList.add("tag_open");
    navbar.classList.add("bgColor");
  } else {
    navBtn.classList.remove("open");
    navTagBtn.classList.remove("tag_open");
    navbar.classList.remove("bgColor");

    navOpen = false;
  }
}

navBtn.addEventListener("click", navBtnClick);
