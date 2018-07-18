$("#colorPicker").val(); //returns color value
$("#inputHeight").val(); //returns height value
$("#inputWidth").val(); //returns width value

// createGrid event handler, listens for click on submit button
$("input[type='submit']").on("click", function(event) {
  event.preventDefault(); // prevents default form submission

  //delcares variables and stores value of user inputs
  const gridHeight = $("#inputHeight").val();
  const gridWidth = $("#inputWidth").val();

  makeGrid(gridHeight, gridWidth); //calls makeGrid function
});

//make grid functon
function makeGrid(gridHeight, gridWidth) {
  $("tr").remove(); //removes tr element

  //creates table for grid usig tr's and td's
  for (let i = 1; i <= gridHeight; i++) {
    $("#pixelCanvas").append("<tr></tr>");
    for (let j = 1; j <= gridWidth; j++) {
      $("#pixelCanvas")
        .children()
        .last()
        .append("<td></td>");
    }
  }

  //gets and applies color value to cell
  $("#pixelCanvas").on("click", "td", function() {
    let color = $("#colorPicker").val();
    $(this).attr("bgcolor", color);
  });
}
