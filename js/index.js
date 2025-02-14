// Iteration 1: Names and Input
let hacker1 = "Imene";
let hacker2 = "Arslane";

console.log(`The driver\'s name is ${hacker1}`);
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);

  } else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name it has ${hacker2.length} characters`);
  
} else {
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

hacker1 = hacker1.toUpperCase();
let otherHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  otherHacker1 += hacker1[i] + " ";
}
console.log(otherHacker1);

let otherHacker2 = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  otherHacker2 += hacker2[i];
}
console.log(otherHacker2);

if (hacker2.localeCompare(hacker1) === 1) {
    console.log("The driver goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("The navigator goes first definitely.");
  } else {
  console.log("What?! You both got the same name?");
  }