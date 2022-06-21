// comparison operators used for comparisons between 2 or more numbers or strings


let number1 = 100;
let number2 = 200;
// == Equal sign (also called loose validation)
let equal_sign = number1 == number2;
console.log(equal_sign);
console.log('');



let number3 = 100;
let number4 = '100';
// == Equal sign (also called loose validation) ---> this will be true as JS will convert the number to string before checking
let equal_sign2 = number3 == number4;
console.log(equal_sign2);
console.log('');




let number5 = 10;
let number6 = 10;
// === Strict equal sign (also called strict validation)
let strict_equal_sign = number5 === number6;
console.log(strict_equal_sign);
console.log('');


let number7 = '10';
let number8 = 10;
// === Strict equal sign (also called strict validation) ---> this will be false as JS will not convert the number to string this time
let strict_equal_sign2 = number7 === number8;
console.log(strict_equal_sign2);
console.log('');



let number9 = 40; 
let number10 = 30;
// not equal sign
let not_equal = number9 != number10;
console.log(not_equal);
console.log('');



// this will return false as 30 number is equal to 30 number 
let number11 = 30; 
let number12 = 30;
// not equal sign
let not_equal_strict = number11 !== number12;
console.log(not_equal_strict);
console.log('');



// this will return true as 30 number is not equal to 30 string value 
let number13 = '30'; 
let number14 = 30;
// not equal sign
let not_equal_strict2 = number13 !== number14;
console.log(not_equal_strict2);
console.log('');


// greater than or less than comparison
console.log("is 5 greater than 3 ?");
console.log(5 > 3);
console.log('');


console.log("is 3 less than 6 ?");
console.log(3 < 6);
console.log('');


// greater than or equal / less than or equal -----> this checks if both items are equal or greater/lesser than each other
console.log("is 4 less than or equal to 4 ?");
console.log(4 <= 4);
console.log('');


console.log("is 4 greater than or equal to 3 ?");
console.log(4 >= 3);
console.log('');