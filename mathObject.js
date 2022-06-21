/**
 * Math Objects
 * this provides properties and methods for mathematical constants and functions
 */

let value_of_pi = Math.PI;
console.log(value_of_pi);
console.log('');


// the ceil method will always round up as 9.3 will be 10
let round_number_up = Math.ceil(9.3); 
console.log(round_number_up);
console.log('');


// the floor method will always round down as 9.3 will be 9 
let round_number_down = Math.floor(9.3); 
console.log(round_number_down);
console.log('');


// the round method will always search for the nearest possible whole number to round the number
// 9.4 and below will be rounded to 9
// 9.5 and above will be rounded to 10
let round_number = Math.round(9.7); 
console.log(round_number);
console.log('');


// square root of a number 
let square_root = Math.sqrt(16);
console.log(square_root);
console.log('');


// absolute value of a number - this will convert -ve numbers to positive 
let absolute_number = Math.abs(-8);
console.log(absolute_number);
console.log('');


// power of a number - needs 2 parameters, first number is base and second is the power
// this means 6^3 = 6 * 6 * 6 = Math.pow(6, 3) 
let power_of_number = Math.pow(6, 3);
console.log(power_of_number);
console.log('');


// check the minimum value in a set of numbers
let minimum_number = Math.min(1,2,4,6,0,10,19);
console.log(minimum_number);
console.log('');


// check the maximum value in a set of numbers
let maximum_number = Math.max(1,2,4,6,0,10,19);
console.log(maximum_number);
console.log('');