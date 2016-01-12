$(function() {

  // hide the story from view
  $("#story").hide();


  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    e.preventDefault()
    // grab the values from the input boxes, then append them to the DOM
    $(".person").empty().append($("input.person").val());
    $(".animal").empty().append($("input.animal").val());
    $(".verb").empty().append($("input.verb").val());
    $(".verb2").empty().append($("input.verb2").val());
    $(".noun").empty().append($("input.noun").val());
    $(".adjective").empty().append($("input.adjective").val());

    // show the story
    $("#story").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  // ---- event handler ---- //
  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
  });

});