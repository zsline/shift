$(function () {
  $('.mission__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/prew-arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='../images/next-arrow.svg'>"

  });
})