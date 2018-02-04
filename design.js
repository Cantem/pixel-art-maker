$(document).ready(function() {
  //DECLARE GLOBAL VARIABLES
  // Select Start canvas
  const CANVAS = $("#pixel_canvas");
  let isDown = false;
  // Select height input
  const INPUT_HEIGHT = $("#input_height");
  // Select width input
  const INPUT_WIDTH = $("#input_width");
  // Select color input
  let COLOR_PICKER = $("#colorPicker").val();
  // Select size input
  const GRID_SIZE = $("#sizePicker").val();
  //Select submitButton
  const SUBMIT_BUTTON = $('input[type="submit"]');

  //FUNCTIONS
  // size is submitted,call makeGrid()
  function makeGrid() {
    // Set Canvas size as N by M grid
    let gridHeight = INPUT_HEIGHT.val();
    let gridWidth = INPUT_WIDTH.val();

    /* Max value = 50(for higher values) */
    if (gridHeight > 40) {
      gridHeight = 40;
    }

    if (gridWidth > 40) {
      gridWidth = 40;
    }

    // Clear the canvas
    CANVAS.empty();

    //Make rows (1 row per height)
    for (let lines = 0; lines < gridHeight; lines++) {
      const line = $("<tr></tr>");
      CANVAS.append(line);

      //Make columns (1 column in each row)
      for (let columns = 0; columns < gridWidth; columns++) {
        line.append("<td></td>");
      }
    }
  }

  // FUNCTIONS
  //Select color input
  $("td").click(function() {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
  //TODO: Is this better? //$("#pixel_canvas").click(function(evt) //{ let color = $("#colorPicker").val();
  //$(evt.target).css("background-color", color);
  //});

  //Create Pixel Canvas on'submit'
  //$("#sizePicker").on("submit",
  //function(evt) {
  $("#button").on("click", function(evt) {
    //Prevent default value to make grid
    evt.preventDefault();
    makeGrid();
    return false;
  });

  //Empty Pixel Canvas
  $("#button").on("dblclick", function(evt) {
    CANVAS.empty();
  });

  //Reset Pixel Canvas
  $("#resetButton").on("click", function(evt) {
    CANVAS.empty();
  });

  //EVENT LISTENERS
  //Remove colour on doubleclick
  CANVAS.on("dblclick", "td", function() {
    $(this).css("background-color", "");
  });

  //Drag and color multiple cells
  CANVAS.on("mousedown", "td", function() {
    //event.preventDefault();
    mouseDrag = true;
  });

  CANVAS.on("mousemove", "td", function() {
    color = $("#colorPicker").val();
    if (mouseDrag) {
      $(this).css("background-color", color);
    }
  });

  CANVAS.on("mouseup mouseleave dragstart", function() {
    mouseDrag = false;
  });

  // Clear multiple cells
  $("#eraseAllCells").click(function() {
    $("td").css("background-color", "");
  });
});
