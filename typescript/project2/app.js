console.log("hello!!!!");
function add(n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.5;
var printResult = false;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
