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


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();