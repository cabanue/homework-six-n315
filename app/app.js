function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (!pageID) {
    MODEL.getPageData("home");
  } else {
    MODEL.getPageData(pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  $(".hamburger").click(function (e) {
    $(".mobile-nav").css("display", "flex");
  });

  $(".click").click(function (e) {
    $(".mobile-nav").css("display", "none");
  });

  $(".mobile-nav-link").click(function (e) {
    $(".mobile-nav").css("display", "none");
  });
}

$(document).ready(function () {
  initListeners("#/home");
});
