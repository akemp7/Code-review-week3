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
  var newRange = [];;
  var test = ''
  var output= ''
  for(var i=0; i<=numberInput; i++){
    newRange.push(i);
    var stringRange= newRange.toString();
  }

//takes care of single digits in a range of 0-9//
  if (stringRange.match('1')){
    var beep = stringRange.replace('1', 'beep');

    if (beep.match('2')) {
      var boop = beep.replace('2', 'boop');

      if (boop.match('3')){
      var  double = boop.replace('3', "Im sorry Dave, but I can't do that.")

        }
      }
    }

  //takes care of double digits//
  var doubleDigits = double;
  if (doubleDigits.match(/[0-9][3]/g || /[3][0-9]/g) ) {
    var test = doubleDigits.replace(/[0-9][3]/g, "I'm sorry Dave, but I can't do that.");
    output = test.replace(/[3][0-9]/g, "I'm sorry Dave, but I can't do that.");
    return output;
  }
}
