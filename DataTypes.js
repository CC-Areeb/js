/**
 * JavaScript has multiple datatypes
 * boolean - True or False -----> only these values
 * null - No value defined
 * undefined - Defined var/let with no value
 * number - numbers like 1,2,3, 1222, 100.001 ----> for any type of number JS will detect it
 * string - Array of characters
 * symbol - Unique value not equal to any other value
 */


// the typeof keyword tells the variable type
// console.log('') -------> this just adds a blank line in the console, good for not mixing stuff


// string
let randomText = 'the quick brown fox jumps over the lazy dog';
console.log(randomText);
console.log(typeof randomText);
console.log('');


//number
let randomNumber = 100;
console.log(randomNumber);
console.log(typeof randomNumber);
console.log('');


// boolean
// you can replace "true" with "false" and the log will display false
let choice = true;
console.log(choice);
console.log(typeof choice);
console.log('');


// null
let something = null;
console.log(something);
console.log(typeof something);
console.log('');


// undefined
// if you also just define an empty variable and logged it the result will be the same
let not_defined = undefined;
console.log(not_defined);
console.log(typeof not_defined);
console.log('');


// symbol
// once you create a symbol, its value is kept private and for internal use.
let my_symbol = Symbol();
console.log(my_symbol);
console.log(typeof my_symbol);
console.log('');


// reference types - they all come back as objects
const cards = ["Spades", "Diamonds", "Clubs", "Hearts"];
console.log(cards);
console.log(typeof cards);
console.log('');


// another way to define an array
const provinces = new Array("Sindh", "Balochistan", "Punjab", "KPK", "Kashmir");
console.log(provinces);
console.log(typeof provinces);
console.log('');


// object litteral ----------> done previously
let wizard1 = {
    name: 'Albus Dumbledore',
    age: 100,
    occupation: 'Hogwartz headmaster',
    special_trait: 'Knows a lot of spells',
    special_item: 'Owner of elder want',
    pet: 'Pheonix'
};
console.log(wizard1);
console.log(typeof wizard1);
console.log('');


// date
const today = new Date();
console.log(today);
console.log(typeof today);
console.log('');