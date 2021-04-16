(function() {
  var body = document.querySelector(".js-body");
  var navToggle = document.querySelector(".js-menu-toggle");
  var navState = document.querySelector(".js-menu-state");

  navToggle.addEventListener("click", event => {
    body.classList.toggle("no-overflow", !navState.checked);
  });
})();
