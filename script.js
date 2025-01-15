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
  categories: ["teaching", "web-dev", "drama", "wealth"],
};

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);
const [a, b, c] = restaurant.categories;
console.log(a, b, c);
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
for (let i = 0; i < cats.length - 1; i++) {
  console.log(cats[i]);
}
const capCat = cats.map((cat) => cat.toUpperCase());
console.log(capCat);
const cars = ["benz", "lexus", "toyota"];
console.log(cars);
console.log(cars.length);
console.log(cars[0]);
cars[1] = "peugeot";
console.log(cars);

cars.push("504");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("505");
console.log(cars);
cars.shift();
console.log(cars);
console.log(cars.indexOf("toyota"));
console.log(cars);
console.log(cars.includes("504"));
cars.push("504");
console.log(cars);
console.log(cars.includes("504"));

console.log(cars);
const myBikes = ["Jincheng", "Suzuki"];
console.log(cars.concat("BRT"));
console.log(cars);
console.log(cars.sort());

// console.log(doubleNumber(39));
const friends = ["caleb", "ojey", "AZ"];
const caleb = "heheheh";
const caleb2 = 87;
console.log(typeof friends);
console.log(friends);
const amount = [
  2000, 21000, -17500, -10000, -48000, 520000, 78000, 1800000, -7000, 180000,
];

console.log(amount.length);
console.log(amount[amount.length - 1]);
console.log(amount[amount.length / 2]);
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
friends[2] = "Mary";
console.log(friends);
friends[3] = "john";
console.log(friends);
friends.push("Nneka");
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
delete friends[1];
console.log(friends);
friends[1] = "peter";
console.log(friends);
friends.unshift("Chi");
console.log(friends);
console.log(amount);
console.log(amount.includes(-7000));
const ev = [2, 3, 4];
console.log(ev.every((banana) => banana < 4));
const trialNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(trialNum.every((eachNum) => eachNum > 1));
console.log(trialNum.map((eachNum) => eachNum * 2));
console.log(trialNum.map((eachNum) => eachNum ** 3));
console.log(trialNum.filter((banana) => banana > 5));
console.log(
  trialNum.filter((banana) => banana % 2 === 0).map((banana) => banana ** 2)
);
console.log(trialNum.concat(ev));

const deposits = [100, 8383, 937, 999, 100, 889, 722, 878];

const total = deposits.reduce(function (acc, cur) {
  return acc + cur;
}, 0);

const stillTotal = deposits.reduce((acc, cur) => acc + cur, 0);
console.log(total);
console.log(stillTotal);
console.log("start");
setTimeout(() => {
  console.log("after 4 second");
  setTimeout(() => {
    console.log("after 3 seconds");
    setTimeout(() => {
      console.log("after 2 seconds");
    }, 2000);
  }, 3000);
}, 4000);
console.log("end");
