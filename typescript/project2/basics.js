"use strict";
console.log("hello!!!!");
function _add(n1, n2, showResult, resultPhrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.5;
const printResults = true;
const resultPhrase = "Result is: ";
const result = _add(number1, number2, printResults, resultPhrase);
console.log(result);
