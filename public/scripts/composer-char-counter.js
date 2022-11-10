/* textarea jquery */

$(document).ready(function() {


  $("form").on("keyup", "textarea", function() {
    let variable = this.value.length;
    let charsLeft = 140 - variable;

    $("output").text(charsLeft);
    const counterbut = document.querySelector("output");
    if (charsLeft < 0) {
      counterbut.style.setProperty("color", "#723333");
    }

    if (charsLeft >= 0) {
      counterbut.style.setProperty("color", "#000000");

    }


  });
});

