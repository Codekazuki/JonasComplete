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

function two() {
  console.log("I am the second");
}
one(two);
