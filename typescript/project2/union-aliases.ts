type Combinable = number | string;
type ConversionDescriptior = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptior) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}


const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('10', '11', 'as-string')
console.log(combinedNames);
