/*
    Ternary Operator
    -----------------

    syntax
    (condition)? true code : false code

*/
const weightKG = 60;
// simple ternary
weightKG >= 60
  ? console.log("Your BMA is good")
  : console.log("It's not good mate");

// mid ternary
let price = 500;
const isLeader = false;
price = isLeader === true ? 0 : price + 100;
console.log(price);

// semi advance
let teka = 100;
const isNeta = false;
teka = isNeta === true ?
    teka >= 100 ?
      teka / 2 : 0
  : teka + 100;
console.log(teka);
