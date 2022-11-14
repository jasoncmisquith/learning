"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: MessageChannel, errorCode: code };
}
// const result = generateError('An error occurred!', 500);
// console.log(result);
