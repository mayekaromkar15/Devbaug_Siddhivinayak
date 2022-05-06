var preloader = document.getElementById("pre-loader");
const navBtn1 = document.getElementById("nav-btn1");
const navBtn2 = document.getElementById("nav-btn2");
const navBtn3 = document.getElementById("nav-btn3");
const cancelBtn = document.getElementById("cancel-btn");
const sideNav = document.getElementById("sidenav");
const modal = document.getElementById("modal");

navBtn1.addEventListener("click", function () {
  sideNav.classList.add("show");
  modal.classList.add("showModal");
});
navBtn2.addEventListener("click", function () {
  sideNav.classList.add("show");
  modal.classList.add("showModal");
});
navBtn3.addEventListener("click", function () {
  sideNav.classList.add("show");
  modal.classList.add("showModal");
});

cancelBtn.addEventListener("click", function () {
  sideNav.classList.remove("show");
  modal.classList.remove("showModal");
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    sideNav.classList.remove("show");
    modal.classList.remove("showModal");
  }
});

function myloader() {
  window.scrollTo(0, 0);
  setTimeout(function () {
    preloader.style.display = "none";
  }, 2000);
}
