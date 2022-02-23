function addEventHandlers() {
  var html = document.querySelector(".js-html");
  var navToggle = document.querySelector(".js-menu-toggle");
  var navState = document.querySelector(".js-menu-state");

  navToggle.addEventListener("click", event => {
    window.scrollTo(0, 0);
    navToggle.setAttribute("aria-expanded", !navState.checked);
    html.classList.toggle("no-scroll", !navState.checked);
    if (navState) {
      navToggle.focus();
    }
  });
}

window.onload = function() {
  addEventHandlers()
}
