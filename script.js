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
console.log(numbers);
// console.log(numbers.reverse());
const word = "Yetunde";
// console.log(word.reverse()); impossible
// console.log(numbers.slice(2));
// console.log(numbers);
// console.log(numbers.splice(-3));
// console.log(numbers);
const moreNumbers = [6, 7, 8, 9];

console.log(numbers.join(""));
console.log(moreNumbers.at(0));
console.log(moreNumbers[0]);
console.log(word.at(3));

const newNumbers = [-50, 0, 100, 500, 300, 400, 700];

let money;

for (const [i, money] of newNumbers.entries()) {
  if (money >= 500) {
    console.log(`day ${i + 1} : amount ${money} is high`);
  } else {
    console.log(`day ${i + 1} : amount ${Math.abs(money)} is low`);
  }
}
console.log("******** FOR EACH *********");
newNumbers.forEach((amount, i, arr) => {
  if (amount >= 500) {
    console.log(`day ${i + 1} : amount is high`);
  } else {
    console.log(`day ${i + 1} : amount is low`);
  }
});
