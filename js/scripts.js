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


  var doubleDigits = stringRange;
  // if (numberInput>100){
  //   alert("Please enter a number less than 100");
  // }
   if (doubleDigits.match(/[3]/) ) {
      var digitThree = doubleDigits.replace(/[0-9]?[3].?/g, "I'm sorry, Dave. But I'm afraid can't do that.");
      output = digitThree;

  } if (doubleDigits.match(/[2]/)) {
    var digitTwo = digitThree.replace(/[0-9]?[2].?/g, "boop");
    output = digitTwo;

  }  if (doubleDigits.match(/[1]/)){
    var digitOne = digitTwo.replace(/[0-9]?[1].?/g, "beep");
    output = digitOne;
  }

  return output;
}
