(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 100);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-150px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Modal Video
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  // Product carousel
  $(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
  });
})(jQuery);

const videoModal = document.getElementById("videoModal");
const video = document.getElementById("video");

videoModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const videoSrc = button.getAttribute("data-src");
  video.setAttribute("src", videoSrc + "?autoplay=1&modestbranding=1&rel=0");
});

videoModal.addEventListener("hidden.bs.modal", function () {
  video.setAttribute("src", "");
});

function subscribeNewsletter() {
  const email = document.getElementById("newsletter-email").value;
  if (email.trim() === "") {
    alert("Vui lòng nhập email của bạn!");
  } else {
    // Ở đây bạn có thể thêm xử lý gửi email hoặc gọi API
    alert(
      "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi thông tin mới nhất tới email: " +
        email
    );
    document.getElementById("newsletter-email").value = ""; // Clear input
  }
}
