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
    if (stringRange.match(/[1]/)){
      output = stringRange.replace(/[1]/, 'beep');
    }

    if (stringRange.match(/[2]/)) {
       output = stringRange.replace(/[2]/, 'boop');
    }

    if (stringRange.match(/[3]/)) {
       output = stringRange.replace(/[3]/, "I'm sorry Dave, but I'm afraid I cannot do that");
    }


      console.log(output);
  }
}
