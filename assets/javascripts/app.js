function addEventHandlers() {
  var html = document.querySelector(".js-html");
  var navToggle = document.querySelector(".js-menu-toggle");
  var navState = document.querySelector(".js-menu-state");

  navToggle.addEventListener("click", event => {
    window.scrollTo(0, 0);
    html.classList.toggle("no-scroll", !navState.checked);
  });
}

window.onload = function() {
  addEventHandlers()
}
