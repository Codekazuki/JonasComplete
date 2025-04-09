"use strict";
//pounded yam company

// function add(a, b) {
//   return console.log(a + b);
// }
// add(3, 5);

//callback is a function passed to another function as arguement
// deeply nested callback function is callbackk hell
function one(a) {
  console.log("I am the first");
  a();
}

function two(b) {
  console.log("I am the second");
  b();
}

function three(c) {
  console.log("I am the three");
  c();
}

function four(d) {
  console.log("I am the four");
  d();
}
function five(e) {
  setTimeout(() => {
    console.log("the fifth ");
  }, 3000);
  e();
}
function six(f) {
  console.log("I am the six");
  f();
}
function seven() {
  console.log("I am the seven");
}
// one(() => two(() => three(() => four(() => five(() => six(seven))))));

function getOrder(process_food) {
  setTimeout(() => {
    console.log("thank you for your order");
  }, 3000);
  process_food();
}
function processFood(seliver_food) {
  setTimeout(() => {
    console.log("Your food is on the way");
  }, 5000);
  seliver_food();
}
function deliverFood(yettunde) {
  setTimeout(() => {
    console.log("Hope you enjoy");
  }, 7000);
  yettunde();
}
function thankYouMessage() {
  setTimeout(() => {
    console.log("thank you for chopping with us");
  }, 9000);
}
getOrder(() => processFood(() => deliverFood(thankYouMessage)));
