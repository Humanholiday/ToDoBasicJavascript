// strike through specific to-dos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete to-do
$("ul").on("click", "span", function(event) {
  //.parent() removes the whole li and not just the span
  $(this)
    .parent()
    //fadeOut then remove using callback function.
    .fadeOut(500, function() {
      $(this).remove();
    });
  //stopPropagation stops the event from bubbling up to parent elements
  event.stopPropagation();
});

//add listener to input field for enter key
$("input[type=text]").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    //clear input box
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$("#toggleForm").click(function() {
  $("input[type=text]").fadeToggle(200);
});
