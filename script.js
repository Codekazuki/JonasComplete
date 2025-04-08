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

function four(a) {
  console.log("I am the fourth");
  a();
}

function five(b) {
  console.log("I am the fifth");
  b();
}

function six(c) {
  console.log("I am the sixth");
  c();
}

function seven() {
  console.log("I am the seventh");
}

// Chained calls:
one(() => two(() => three(() => four(() => five(() => six(() => seven()))))));
