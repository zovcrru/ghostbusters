$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContenet = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContenet).toggleClass("visible");
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      256: {
        slidesPerView: 1,
        slidesOffsetAfter: 25,
        navigation: {
          nextEl: ".button-next",
        },
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
      // when window width is >= 480px
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
});
