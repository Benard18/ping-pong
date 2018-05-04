///Business logic Interface

var result;
function condor(){
  for (var index=1; index<=result;index++){
    if((index % 3 == 0) &&  (index % 5 == 0)){
      $("ul#dry").append("<li>pingpong</li>");
    }
    else if (index % 5 == 0) {
      $("ul#dry").append("<li>pong</li>");
    }
    else if (index % 3 == 0){
      $("ul#dry").append("<li>ping</li>");
    }
    else {
      $("ul#dry").append("<li>" + index.toString() + "</li>");
    }
  }
}
///User logic Interface///
$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    $("#dry").text("");
    result = parseInt($("input#number2").val());
    condor();
    console.log('Reach');
    $("#dry").show();
    $("input#number2").val("");

  });
});
