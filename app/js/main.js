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
  $('.masters__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: "<img class='a-left control-a prev slick-prev' src='../images/prew-arrow.svg'>",
    nextArrow: "<img class='a-right control-a next slick-next' src='../images/next-arrow.svg'>",
responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false
        }
      },
    ]
  });
  $('.sale__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1165,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 888,
        settings: {

          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.all-new__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1165,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
var mixer = mixitup('.magasine__inner');