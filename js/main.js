const orderBtn = document.querySelector(".banner-button");
const modalBtn = document.querySelector(".modal-btn");
const modalWnd = document.querySelector(".modal-container");

orderBtn.addEventListener("click", openBtn);
modalBtn.addEventListener("click", closeBtn);

function openBtn() {
  modalWnd.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeBtn() {
  modalWnd.classList.remove("is-open");
  document.body.classList.add("no-scroll");
}

// ======mob menu btn=======

const mobBtn = document.querySelector(".mobile-btn");
const mobClose = document.querySelector(".mob-menu-close-btn");
const mobMenu = document.querySelector(".mob-menu");

mobBtn.addEventListener("click", openMenu);
mobClose.addEventListener("click", closeMenu);

function openMenu() {
  mobMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  mobMenu.classList.remove("is-open");
  document.body.classList.add("no-scroll");
}
