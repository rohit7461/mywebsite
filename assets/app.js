var swiper = new Swiper(".project", {
  grabCursor: true,
  loop: true,
  effect: "creative",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: false,
      translate: ["120%", 0, -500],
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
