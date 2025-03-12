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

const addUp = numbers.reduce((acc, sum) => {
  return (acc = acc + sum);
}, 0);
console.log(addUp);
