jQuery(document).ready(function() {
  // water effect
  "use strict";
  $(".slider").ripples({
    dropRadius: 15,
    perturbance: 0.01,
  });
  // Text Animation
  // $(".text").typed({
  //   strings: ["First Sentences.", "Second Sentences."],
  //   typeSpeed: 40,
  //   loop: true,
  // });

  // alternatif 2 text animation
  var options = {
    strings: [
      "<strong>I Love </strong><strong class='primary'>CODINGS</strong>",
      "<strong>Say yes to</strong> <strong class='secondary'>CODE!</strong>",
    ],
    typeSpeed: 30,
    loop: true,
  };
  var typed = new Typed(".text", options);

  // show navbar when scroll
  $(window).scroll(function() {
    var top = $(window).scrollTop();

    if (top >= 60) {
      $("nav").addClass("third");
    } else if ($("nav").hasClass("third")) {
      $("nav").removeClass("third");
    }
  });

  // Magnifying pop up gallery
  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
    // other options
  });

  // owl carousel
  // use owl-theme on ID to get fancy click (dot) effect
  $(document).ready(function() {
    $("#team-members").owlCarousel({
      items: 3,
      autoPlay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        // breakpoint from 480 up
        480: {
          items: 2,
        },
        // breakpoint from 768 up
        768: {
          items: 3,
        },
      },
    });
    // data-slide Carousel
    // var slider = $('#carousel-testimonials').carousel({});
    //
    // $(".carousel-ind li").click(function(e) {
    //   var index = $(this).data('slide');
    //   slider.carousel(index);
    //   e.preventDefault();
    // })

    // counter js
    $('.counter').counterUp({
      delay: 10,
      time: 4000
    });
    // smooth Scroll
    // giving delay when click
    $('a.smooth-scroll').click(function(event) {
      event.preventDefault();

      var section = $(this).attr("href");

      $('html, body').animate({
        scrollTop: $(section).offset().top - -2
      }, 1250, "easeInOutExpo");
    });
    // wow min js
    new WOW().init();
  });



});
