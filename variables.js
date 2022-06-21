/** 
 * 3 ways to declare variables in JS
 * var
 * let
 * const
 * 
 * in ES-6 we use let and const as it is the new and better way
 * 
 * 
 * Naming conventions
 * do not use the javascript reserved key words
 * do not start a name with a number (0-9)
 * always start with a letter(a-z/A-Z) and underscore(_)
 * variables are case sensitive (Name != name) ----> not equal 
 * suggested name case would be camel case
 * 
 * sample of camel case: firstName
 * other case include Pascal case - example: FirstName -------> better used in Object Oriented Programming
*/



// declaring a variable with a value (value can be string or integer or float pointers)
let name = 'My name is DOBBY 🧝‍♂️🧝‍♂️🧝‍♂️🧝‍♂️🧝‍♂️';
console.log(name);


// declaring a variable without any value
let new_name; // ---> if we log the output it will be undefined as there is no value

new_name = 'Hedwig the owl 🦉🦉🦉🦉'
console.log(new_name);


// now using a const data type declaration -----> this won't be able to change so this id number is permanent until the dev changes it 
// the const variables must always have a variable otherwise it will throw an error
const id = 102030;
console.log(id);


// we can use object literals / structures as well to define a complete properties such as a person's basic details
const person1 = {
    name: 'harry', 
    age: 25,
    occupation : 'wizard',
    house: 'griffindor',
    pet: 'hedwig',
    special_trait: 'can speak to snakes'
};

console.log(person1);



// this is an example fo destructuring in JS
// if you have defined a big object in JS, then you can pick data that you want to use like in this case the house
const {house} = person1;
console.log(house);