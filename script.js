"use strict";
//pounded yam company

// function add(a, b) {
//   return console.log(a + b);
// }
// add(3, 5);
function one(x) {
  console.log("I am the first");
  x();
}

function two(y) {
  console.log("I am the second");
  y();
}
function three(z) {
  console.log("I am the third");
  z();
}
function four() {
  console.log("I am the four");
}

one(() => two(() => three(four)));
