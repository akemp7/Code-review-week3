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
    var toBeep = stringRange.replace('1', 'beep');

    if (toBeep.match('2')) {
      var toBoop = toBeep.replace('2', 'boop');

      if (toBoop.match('3')){
      var  hal = toBoop.replace('3', "I'm sorry, Dave. But I'm afraid can't do that.")

        }
      }
    }

  //takes care of double digits//
  var doubleDigits = hal;
  if (numberInput>100){
    alert("Please enter a number less than 100");
  } else if (doubleDigits.match(/[0-9][3]/g|/[3][0-9]/g) ) {
      var digitThree = doubleDigits.replace(/[0-9][3]/g, "I'm sorry, Dave. But I'm afraid can't do that.");
       digitThree = digitThree.replace(/[3][0-9]/g, "I'm sorry, Dave. But I'm afraid can't do that.");
      output = digitThree;

  } if (doubleDigits.match(/[0-9][2]/g|/[2][0-9]/g)) {
    var digitTwo = digitThree.replace(/[0-9][2]/g, "boop");
     digitTwo = digitTwo.replace(/[2][0-9]/g, "boop");
    output = digitTwo;

  }  if (doubleDigits.match(/[0-9][1]/g|/[1][0-9]/g)){
    var digitOne = digitTwo.replace(/[1][0-9]/g, "beep");
    digitOne= digitOne.replace(/[0-9][1]/g, "beep");
    output = digitOne;
  }

  return output;
}
