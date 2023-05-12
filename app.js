$(document).ready(function() {
  let btn = $("#myBtn");
  let jediNameDiv = $(".jediNameDiv");

  btn.on("click", function() {
    // btn.remove();

    let firstName = $("#firstname").val();
    let lastName = $("#lastname").val();
    let maidenName = $("#maidenname").val();

    let jediName = generateJediName(firstName, lastName, maidenName);

    jediNameDiv.text(jediName);
  });

  function generateJediName(firstName, lastName, maidenName) {
    let jediFirst = lastName.slice(0, 3) + firstName.slice(0, 2);
    jediFirst =
      jediFirst.charAt(0).toUpperCase() + jediFirst.slice(1).toLowerCase();
    let jediLast = maidenName.slice(0, 3);
    jediLast = jediLast.charAt(0).toUpperCase() + jediLast.slice(1).toLowerCase();

    return jediFirst + " " + jediLast;
  }

  const form = $("#jediform");

  form.on("submit", function (evt) {
    evt.preventDefault();
    btn.trigger("click");
  });
});
