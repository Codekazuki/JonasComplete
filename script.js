"use strict";

//short circuiting
// || operator ...... it returns the first truthy value, or the last value if none is true

console.log(undefined || null || NaN || 0 || "");

// && operator returns the first falsy value or the last value if all are true

// console.log(34 && true);

let isAdmin = "no";
let isEditor = NaN;
// console.log(isAdmin || isEditor);
let isLoggedIn = "false";
let isVerified = undefined;
let haveAccess = NaN;
console.log(haveAccess && isVerified && isAdmin && "Access granted");
// const objNumbers = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 4,
// };
// console.log(objNumbers);
//for loop
for (let i = 1; i < 11; i++) {
  console.log(`done ${i} times`);
}
//while loop
let rep = 1;
while (rep < 11) {
  console.log(`done ${rep} number of times`);
  rep++;
}
const numbers = [1, 2, 3, 4, 4];

// for-of loop
for (const num of numbers.entries()) {
  console.log(`position ${num[0] + 1} is ${num[1]}`);
}
console.log(numbers);
console.log([...numbers.entries()]);

const eplTeams = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton & Hove Albion",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Liverpool",
  "Luton Town",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Nottingham Forest",
  "Sheffield United",
  "Tottenham Hotspur",
  "West Ham United",
];
for (const num of eplTeams.entries()) {
  console.log(`position ${num[0] + 1} is ${num[1]}`);
}
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
const check = (seat) => {
  const s = seat.slice(-1);
  if (s === "a" || s === "e") {
    console.log("you get vowel");
  } else {
    console.log("you get consonant");
  }
};
check("34b");
check("23a");
