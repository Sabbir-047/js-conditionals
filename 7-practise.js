// 1 - Free cola
// -----------------
let price = 300;
if (price > 500) {
  console.log("free coke");
} else {
  console.log("30tk");
}

// 2 - BMI calculator
// -----------------
let weight = 60; //in kg
let height = 1.75; // in meter
let BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Overweight");
} else {
  console.log("You are obese");
}

// 4 - Nested Friends
// -----------------
let myScore = 89;
let friendScore = 90;

if (myScore > 80) {
  if (friendScore >= 80) {
    console.log("Go for a lunch");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Next time mate");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Message Unseen");
  } else if (friendScore < 40) {
    console.log("Message Block");
  }
} else {
  console.log("Act sad mate");
}

// 5 - Ternary Numbers
// -----------------
let num1, num2, result;
num1 = 34;
num2 = 23;

// simple if else
if (num1 > num2) {
  result = num1 * num1;
} else {
  result = num1 + num2;
}
console.log(result);

// ternary if else
num1 > num2 ? (result = num1 * num1) : (result = num1 + num2);
console.log(result);

// 6 - Bus Fare
// -----------------
let age = 32;
let student = true;
let oldGuy = 60;
if (age < 10) {
  console.log("free");
} else if (student) {
  console.log("50% discount");
} else if (age >= oldGuy) {
  console.log("15% discount");
} else {
  console.log("Pay your bill man!");
}
