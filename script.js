// console.log("Tope my nigga");
// console.log(7);
// console.log(10 + 6 * 4);
// console.log(3 + 6 - 8 * 2);
// // variable -------cONTAINER
// // value....... content

// let firstName = "Yetunde";
// console.log(firstName);
// let country = "canada";
// console.log(country);

// country = "USA";
// country = null;
// console.log(country);
// let bucket = "coke";
// bucket = "fanta";
// // camelCase naming
// let myFirstSon = "Mercy";
// let mobile1 = "hello";

// // $,letters,numbers,_
// let myCountry = "UK";
// myCountry = 89;
// // 1. Number 8
// // 2. string 'this is a string '
// // 3. boolean true or false
// // 4. undefined
// let club;
// // 5. null
// // 6. symbol
// // 7.bigint
// console.log(typeof myCountry);

// // let,const,var
// const myYearOfBirth = 2008;
// // myYearOfBirth = 2012;

// console.log(2 - 4);
// // + is used for concatenation

// let a, b;
// a = 50;
// b = 40;
// console.log(a, b);
// console.log((a + b) / 2);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn, BMIMark);
// const markHigherBMI = BMIJohn > BMIMark;
// console.log(markHigherBMI);

// const myMentor = "Temitope";
// const language = "js";

// // Tempelate literals
// const myNewName = `Daniel`;
// console.log(myNewName);

// const myFirstName = "Ayodele";
// const myNickName = "Coach";
// console.log(myFirstName + " " + myNickName);
// console.log(`${myFirstName} ${myNickName} ${2010 - 2009} `);
// console.log(
//   "I \n\
// Love \n\
// God"
// );
// console.log(`I
// Love
// God`);
// // easy way to interpolate variable and expression into strings

// && and operator
// || or operator
// ! not operator

// const age = prompt("How old are you?");
let age;
if (age <= 17) {
  const waitingPeriod = 18 - age;
  console.log(
    `Too young to drive... wait till you are 18 which is ${waitingPeriod} ${
      waitingPeriod === 1 ? "year" : "years"
    } from now`
  );
} else if (age >= 18 && age <= 65) {
  console.log("agile enough to drive");
} else {
  console.log("too old to drive");
}

// === strict equality vs == loose equality
console.log(3 == "3");
console.log(3 === "3");

let number = 7;
if (number === 2) {
  console.log("number is 2");
} else if (number === 8) {
  console.log("my favorite number");
} else {
  console.log("number is not 2");
}
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

const scoreDolphins = (96 + 910 + 89) / 3;
const scoreKoalas = (89 + 910 + 96) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy 🏆");
}
// statement vs expression
// expression produces a value
// statement does not produce a value
true && false;
console.log(`I
Love
God`);

//truthy and falsy
// there are 5 falsy values
// 1. false
// 2. 0
// 3. '' empty string
// 4. undefined
// 5. NaN

if ("") {
  console.log("This is true");
} else {
  console.log("this is false");
}
// type conversion vs type coersion

// + - / *

console.log("2" + 2);
// left to right
//  + concatenates ..... it turnes number to string
// - / * converts to number
console.log("10" + "5" - 2);
console.log("10" + "4" - 2 + "8");
console.log(2 + 3 + 5 + "6" + (2 + 5));
console.log("10" + 8 + "3" - 2 + "8" * 2);

console.log(2 + "3" * 2);

// const yob = Number(prompt("how old are you"));
// console.log(yob + 10);
// Number();
age = 100;
if (age <= 50) {
  console.log("You are still young");
} else if (age >= 51 && age <= 99) {
  console.log("He is old");
} else {
  console.log("all conditions not met");
}

// && and operator .... all conditions correct
// || or operator ..... one condition correct
// ! not operator
