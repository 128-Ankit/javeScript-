// const age = prompt("How old are you?");

// if(age < 18) {
//     console.log("You are a minor.");
// } else if (age == 18) {
//     console.log("You are an adult.")
// } else {
//     console.log("You are an elderly person.");
// }
let age = 18;

let accessAllowed = (age > 18) ? true : false; // ternary operator will  return boolean value based on the condition, return true if age > 18 otherwise returns false

console.log(`Access allowed: ${accessAllowed}`)


let age2 = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );