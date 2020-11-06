import Glide from "@glidejs/glide";

var glide = new Glide(".glide", {
  type: "carousel",
  perView: 2,
  autoplay: 4000,
  animationDuration: 1500,
  hoverpause: false,
  breakpoints: {
    680: {
      perView: 1,
    },
  },
});

glide.mount();
