///Business logic Interface

    var result;
   function condor (){
    for (var index = 0; index <= number.length;index ++  ){
  if(index % 3 == 0){
    $("ul#dry").append("<li>"+ 'ping' +"</li>");
  }
   else if (index % 5 == 0) {
     $("ul#dry").append("<li>"+ 'pong' +"</li>");
}
  else if(index % 15 == 0){
  $("ul#dry").append("<li>"+ 'ping pong' +"</li>");
  }
else {
  $("ul#dry").append("<li>"+ number.tostring() +"</li>");
}
}
}
///User logic Interface///
$(document).ready(function() {
    $("form").submit(function(event) {
      $("#dry").text('');
     result = $("input#number2").val();
      condor ();
      $("#dry").show(result);
      $("input#number2").val("");
      event.preventDefault();
    });
  });
