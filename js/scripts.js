$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var colorPreference = parseInt($("#color").val());
    var pizzaPreference = parseInt($("input:radio[name=agreement]:checked").val());
    var numberPreference = parseInt($("input#number").val());
    var numberComputer = numberPreference / 4;
    var preferenceValue = colorPreference + pizzaPreference +numberComputer;


    if ( preferenceValue <= 4) {
      $("#result").text("conservative");
      $("#result").addClass("red");
      $("#yourAnswer").show();
      $("body").addClass("red");
    }

    else if ( preferenceValue > 4 && preferenceValue < 9) {
      $("#result").text("nuetral");
      $("#result").addClass("grey");
      $("#yourAnswer").show();
      $("body").addClass("grey");
    }

    else if ( preferenceValue >= 9) {
      $("#result").text("liberal");
      $("#result").addClass("blue");
      $("#yourAnswer").show();
      $("body").addClass("blue");
    }



  });
});
