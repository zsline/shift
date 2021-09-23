$(function () {
  $('.mission__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='../app/images/prew-arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='../app/images/next-arrow.svg'>"

  });
  $('.about__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: "<img class='a-left control-a prev slick-prev' src='../app/images/prew-arrow.svg'>",
    nextArrow: "<img class='a-right control-a next slick-next' src='../app/images/next-arrow.svg'>"

  });
})