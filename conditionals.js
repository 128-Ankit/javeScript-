const age = prompt("How old are you?");

if(age < 18) {
    console.log("You are a minor.");
} else if (age == 18) {
    console.log("You are an adult.")
} else {
    console.log("You are an elderly person.");
}