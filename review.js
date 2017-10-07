function processData(input) {
    //Input as an array split at new line char
    inputArr = input.split('\n');
    //# of test cases 
    var numCases = inputArr[0];
    //Remove # of test cases from array
    inputArr.shift();
    //Array containing only the test cases
    var testCases = inputArr;
    
    
    //Loop through the testCases
    for(var i = 0; i < numCases; i++) {
        var testCase = testCases[i];
        var evenLetters = "";
        var oddLetters = "";
        //Loop through each testCase
        for(var j = 0; j < testCase.length; j++) {
            //If the index of the letter is divisible by 2 add it to evenLetters
            if (j % 2 === 0) {
                evenLetters += testCase[j];
            //Else add it to oddLetters
            } else {
                oddLetters += testCase[j];
            }
        }
        console.log(evenLetters + " " + oddLetters);
            
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
