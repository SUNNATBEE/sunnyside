var elOpenNavbar = document.querySelector(".js-open-navbar");

elOpenNavbar.addEventListener("click", function () {
  elOpenNavbar.closest(".site-header").classList.toggle("navbar-open");
});
