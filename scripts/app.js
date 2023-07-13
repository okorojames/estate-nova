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
  responsive: [
    {
      breakpoint: 997,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//
const nav = document.querySelector("nav");
document.addEventListener("scroll", () => {
  if (scrollY > 25) {
    nav.style.background = "#131110";
    nav.style.zIndex = "90";
  } else {
    nav.style.background = "transparent";
  }
});

//
const drop_down_header = document.querySelectorAll(
  ".value_section_drop_down_header"
);
const drop_down_body = document.querySelectorAll(
  ".value_section_drop_down_body"
);
drop_down_header.forEach((drop_header) => {
  drop_header.addEventListener("click", (e) => {
    e.target.parentElement.nextElementSibling.classList.toggle(
      "toggle_drop_down"
    );
    if (
      e.target.parentElement.nextElementSibling.classList.contains(
        "toggle_drop_down"
      )
    ) {
      e.target.parentElement.parentElement.classList.add("toggle_drop_down");
    } else {
      e.target.parentElement.parentElement.classList.remove("toggle_drop_down");
    }
  });
});

//
$(".testimonial_row").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 997,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// nav toggle function
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav_links");
const burger = document.querySelectorAll(".burger");

// handleToggleNav
const handleToggleNav = () => {
  nav_links.classList.toggle("toggle_nav");
  burger.forEach((burger) => {
    burger.classList.toggle("toggle_nav");
  });
};
//

hamburger.addEventListener("click", handleToggleNav);
