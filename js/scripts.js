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
  if (doubleDigits.match(/[0-9][3]/g|/[3][0-9]/g) ) {
      var digits = doubleDigits.replace(/[0-9][3]/g, "I'm sorry Dave, but I can't do that.");
      var test = digits.replace(/[3][0-9][0-9]/g, "I'm sorry Dave, but I can't do that.");
      output = test;
  }

  if (doubleDigits.match(/[0-9][2]/g|/[3][0-9]/g)) {
    var digitTwo = test.replace(/[0-9][2]/g, "boop");
    var secondDigit = digitTwo.replace(/[2][0-9][0-9]/g, "boop");
    output = secondDigit;
  }

  if (doubleDigits.match(/[0-9][1]/g|/[1][0-9]/g)){
    var digitOne = secondDigit.replace(/[1][0-9][0-9]/g, "beep");
    var oneDigit = digitOne.replace(/[0-9][1]/g, "beep");
    output = oneDigit;
  }

  return output;

}
