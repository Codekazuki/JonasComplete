const addNumber = (a, b) => {
  return a + b;
};
console.log(addNumber(5, 8));

const outer = () => {
  const myName = "Ayo";

  const inner = () => {
    console.log(`my name is ${myName}`);
  };

  inner();
};
// console.log(outer());
// closure
outer();

const juiceMaker = (orange, lemon) => {
  const message = `make juice with ${orange} orange and ${lemon} lemon`;
  console.log(message);
};
juiceMaker(4, 2);
juiceMaker(18, 8);
juiceMaker(9, 6);

const friends = ["paul", 6, "Robiat", "Yetunde"];
console.log(friends);
//methods are functions attached to an object
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
friends.push("Biodun");
console.log(friends);
friends.unshift("Tbasz");
console.log(friends);
// arrays are indexed based..... and it starts from 0
// MAP, FILTER AND REDUCE
const numbers = [2, 4, 6, 8, 8, 3, 2, 4];
console.log(numbers);

const doubleNum = numbers.map((x) => x * 2);
console.log(doubleNum);
console.log(numbers);
const times10 = numbers.map((el) => el * 10);
console.log(times10);

//filter
const belowFive = numbers.filter((el) => el > 5);
console.log(belowFive);

const oddNumber = numbers.filter((x) => x % 2 !== 0);
const evenNumber = numbers.filter((x) => x % 2 === 0);
console.log(oddNumber, evenNumber);
const newNumbers = [2, 4, 6, 8, 8, 3, 2, 4, 10, 38, 5, 6];
//REDUCE
const sum = newNumbers.reduce((acc, sum) => {
  return (sum = acc + sum);
}, 0);
console.log(sum);
// for loop....... while loop
for (let fasting = 1; fasting <= 30; fasting++) {
  console.log(`I have fasted for ${fasting}days`);
}
//for loop
for (let pushUp = 1; pushUp <= 4; pushUp++) {
  console.log(`Tbasz has done ${pushUp} pushup`);
}
console.log(newNumbers);
for (let i = 1; i <= newNumbers.length - 1; i++) {
  console.log(newNumbers[i] * 2);
}

//while loop

a = 1;
while (a <= 5) {
  console.log(`we have done it ${a} times`);
  a++;
}

let chorus = 1;
while (chorus < 21) {
  console.log(`we don sing am ${chorus} ${chorus === 1 ? "time" : "times"}`);
  chorus++;
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < newNumbers.length; i++) {
  console.log(newNumbers[i] * 10);
}
let summation = 1;
console.log(summation);
for (let i = 1; i <= 5; i++) {
  summation = summation * i;
}
console.log(summation);
// 1 2 3 4 5
