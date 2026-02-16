if (document.querySelectorAll(".field").length) {
  document.querySelectorAll(".field").forEach(field => {
    field.addEventListener("input", function () {
      if (field.querySelector(".field__input").value.length) {
        field.classList.add("_is-filled");
      } else {
        field.classList.remove("_is-filled");
      }
    });
  });
}
