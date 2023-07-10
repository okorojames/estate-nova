/*=============*/
/*COUNTER CODE*/
/*===========*/
$(".main_section_h4").counterUp({
  delay: 1,
  time: 300,
});

/*=============*/
/*SLICK CAROUSEL INITIALIZATION*/
/*===========*/
$(".residence_row").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
});
