console.log("mary the lover girl");
console.log("hellloooooo");
console.log(89);
console.log("60");
const loverGirlName = "mary";
console.log(loverGirlName);

const wife = "Mary";
console.log(wife);
let myAddress = "25 lawani street idi araba";
console.log(myAddress);
let firstName = "Ayodele";
const bestFriend = `Sule Maito`;
console.log(bestFriend);
console.log(
  `My name is ${firstName}, the name of my best friend is ${bestFriend} and we stay at ${myAddress}`
);
console.log(11 % 7);
console.log(2 === "2");

let now = 2024;
let yearOfBirth = 2006;
let age = now - yearOfBirth;
// let canDrive = age >= 18;
if (age > 18) {
  const validSince = age - 18;
  console.log(
    `She is ready to get her licence......... She's been ready since ${validSince} years ago `
  );
} else if (age === 18) {
  console.log(
    "Happy birthday ........She is ready to get her licence........."
  );
} else {
  const yearsRemain = 18 - age;
  console.log(
    `You're too young darling, wait for another ${yearsRemain} years`
  );
}
console.log(age);

let currentAge = 0;
if (currentAge <= 14 || currentAge >= 65) {
  console.log("drink water");
} else if (currentAge > 14 && currentAge < 22) {
  console.log("drink juice");
} else if (currentAge > 21 && currentAge < 46) {
  console.log("Drink alcohol");
} else {
  console.log("we no send you");
}
console.log(Math.floor(Math.random() * 29) + 1);

let currAge = 100;
if (currAge <= 18) {
  console.log("drink water 💧");
} else if (currAge >= 22 && currAge <= 35) {
  console.log("Smoke weed 🌴");
} else if (currAge >= 36 && currAge <= 50) {
  console.log("eat bread and beans");
} else if (currAge >= 51 && currAge <= 90) {
  console.log("go and sleep");
} else {
  console.log("hsck wine");
}

currAge <= 18
  ? console.log("drink water 💧💧💧💧")
  : currAge >= 22 && currAge <= 35
  ? console.log("Smoke weed 🌴🌴🌴🌴")
  : console.log("shack wine🍷🍷🍷");

let state = "ogun";
if (state === "lagos") {
  console.log("Eko ile ogbon");
} else if (state === "oyo") {
  console.log("amala people");
} else if (state === "enugu") {
  console.log("coal city");
} else {
  console.log("gettat");
}

state === "lagos"
  ? console.log("Eko ile Ogbon")
  : state === "oyo"
  ? console.log("Largest city dey here")
  : state === "enugu"
  ? console.log("Coal city")
  : console.log("gettat");

let isGood = true;
let isBlind = false;
let isDumb = false;
let agePerson = 30;

if (isBlind && agePerson >= 30) {
  console.log("hello");
} else if (isBlind && isDumb) {
  console.log("hhiiiiiiiiiiii");
} else if (isDumb && isGood) {
  console.log("ooooooooooo");
} else {
  console.log("not found");
}

let hiddenNumber = 2;
if (hiddenNumber < 15) {
  console.log("guess is too low ");
} else if (hiddenNumber === 15) {
  console.log("You don get am ");
} else if (hiddenNumber > 15) {
  console.log("your guess is too high");
}
const restaurant = {
  name: "Lindiwe Incorporation",
  location: "Lagos",
  categories: ["teaching", "web-dev"],
};

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);
const { a, b, c } = restaurant;
console.log(a, b, c);
