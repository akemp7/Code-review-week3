////User Logic/////
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numeric").val());
    $(".output").text(numberInput);
  });
});


////Business Logic////
function numberRange (numberInput) {
  return numberInput
}
