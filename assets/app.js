(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

const ham = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".link");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("active");
    ham.classList.toggle("active");
  });
});
