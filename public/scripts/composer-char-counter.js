$(document).ready(function () {
  // --- our code goes here ---

  $("form").on("keyup", "textarea", function () {
    let variable = this.value.length;
    let charsLeft = 140 - variable;
    console.log(charsLeft);
    $("output").text(charsLeft);
    const counterbut = document.querySelector("output");
    if (charsLeft < 0) {
      counterbut.style.setProperty("color", "#723333");
    }
  });
});

console.log("Document is ready!");
