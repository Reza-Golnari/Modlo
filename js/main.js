const mobileIcon = document.querySelector(".mobile-menu-icon");
const sideMenu = document.querySelector(".mobile-menu-box");
const mobileDropBtn = document.querySelector(".side-menu-btn");
const mobileDropIcon = document.querySelector(".side-menu-icon");
const underMenu = document.querySelector(".mobile-under-menu");
const shopItem = document.querySelector("#mobile-shop-item");

mobileIcon.addEventListener("click", () => {
  mobileIcon.classList.toggle("active");
  sideMenu.classList.toggle("show");
});

mobileDropBtn.addEventListener("click", () => {
  shopItem.classList.toggle("show");
  mobileDropIcon.classList.toggle("open");
});
