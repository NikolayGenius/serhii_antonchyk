$(document).ready(function() {
  $(".slider").slick({
    arrows: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='../img/prev.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='../img/next.png'>",

    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1
        }
      }
    ]
  });
});
