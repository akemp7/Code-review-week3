////User Logic/////
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numeric").val());
    $(".output").text(numberRange(numberInput));
  });
});


////Business Logic////
function numberRange (numberInput) {
  var newRange = [];
  for(var i=0; i<=numberInput; i++){
    newRange.push(i);
    var test= newRange.toString();
    var newTest = test.replace('1', 'beep');
    console.log(newTest);
  }




}
