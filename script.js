"use strict";

function makeTea() {
  function pourMilk() {
    console.log("milk poured");
  }
  pourMilk();
  console.log("tea made");
}
makeTea();
const numbers = [1, 2, 3, 4, 5];
const doubleNum = numbers.map((y) => y * 2);
console.log(numbers);
console.log(doubleNum);
const halfNum = numbers.map((x) => {
  return x * 0.5;
});
console.log(halfNum);
const addFiftyPercent = numbers.map((a) => {
  return a + a / 2;
});
console.log(addFiftyPercent);
console.log(numbers);

const tripleNum = numbers.map;

//filter
const greaterThanThree = numbers.filter((el) => el >= 3);
console.log(greaterThanThree);

const an = numbers.filter((num) => num % 2 !== 0);
console.log(an);
//reduce

let fatimaResult = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 10);
console.log(fatimaResult);
let halimaResult = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);
console.log(halimaResult);
function factorial(num) {
  return num * (num - 1);
}
console.log(factorial(100));
