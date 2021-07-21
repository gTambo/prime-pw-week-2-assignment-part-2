// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We define a string variable and set its value as "Dane"
// We then set a conditional to check whether the string 'name' is 'Mary'
// if yes, we console log "Hi, Mary"; if no, we console log "How do you do?"
// Since the variable 'name' is not Mary, console log will show "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called 'secret,' but assign it no value
// We declare a number variable 'code' and assign it the number 123
// We create a condition to check if 'code' equals 123; if yes, 'secret' gets the string "super"
// and 'code' is multiplied by 2
// After this, we create another condition to check if 'code' is greater than 250;
// if yes, 'secret' now becomes 'duper'
// code was initially 123, so 'secret became "super", but 123 times 2 is 246, which is less than 250
// so we console log the string 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable isStudent and give it the boolean value of true
// we declare another variable age and set it to the number 34
// We declare another variable zip and set it equal to 55407
// we create a compound conditional to check if both isStudent is true and zip is greater than 80000; if yes, we log 'You're a student on the West Coast!'
// next we check if isStudent is false or if age is less than 30; if either are true, we log 'What are your hobbies?'
// then we check if just isStudent is true, in which case we log 'Welcome to Prime!'
// If non of the previous conditions are met, log 'How about the weather?'
// isStudent is true, but zip is less than 80000, so we check the second condition, and age is greater than 30, so we check the third condition and console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX switch colorOne and colorTwo
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX set colorTwo to 'purple' also
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX time is a variable and should be declared with let
const time = 4;

// FIX the condition is an 'and' so it should use && not ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
// FIX can we assume minAge is a constant because of implied situational context? If not, switch it to a variable with let
let age = 21;
const minAge = 21;

// FIX remove equals sign
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
