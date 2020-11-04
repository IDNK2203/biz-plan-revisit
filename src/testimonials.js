import Glide from "@glidejs/glide";
// new Glide('.glide').mount()
var glide = new Glide(".glide", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 2,
    },
    680: {
      perView: 1,
    },
  },
});

glide.mount();
