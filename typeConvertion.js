/**
 * Type conversion
 * used for converting one data type to other
 */


let number_to_string = String(20);
console.log(number_to_string);
console.log(typeof number_to_string);
console.log('');    


let boolean_to_string = String(true);
console.log(boolean_to_string);
console.log(typeof boolean_to_string);
console.log('');


let date_to_string = String(new Date());
console.log(date_to_string);
console.log(typeof date_to_string);
console.log('');


let array_to_string = String([1, 2, 3, 4, 5, 6]);
console.log(array_to_string);
console.log(typeof array_to_string);
console.log('');


// we use toString method to convert numbers to string
let to_string = (100).toString();
console.log(to_string);
console.log(typeof to_string);
console.log('');


let string_to_number = Number('200');
console.log(string_to_number);
console.log(typeof string_to_number);
console.log('');


// true is equal to 1 in programming language and false is equal to 0 
let boolean_to_number = Number(true);
console.log(boolean_to_number);
console.log(typeof boolean_to_number);
console.log('');


// the output will be NaN which means Not a Number(NaN)
let string_text_to_number = Number('This is a test');
console.log(string_text_to_number);
console.log(typeof string_text_to_number);
console.log('');


let array_to_number = Number([100, 200, 300, 400]);
console.log(array_to_number);
console.log(typeof array_to_number);
console.log('');


// we can use the ParseInt to convert string whole number to an actual whole number
// for float numbers we just replace parseInt with parseFloat
let parse_int = parseInt('400');
console.log(parse_int);
console.log(typeof parse_int);
console.log('');


// NOTE: no way to convert string text into a number as it is not a number at all