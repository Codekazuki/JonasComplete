"use strict";
const check = document.querySelector(".hello");
console.log(check);
const breakRaw = (raw) => {
  return raw * 4;
};
const maker = (sand, water) => {
  const sandPi = breakRaw(sand);
  const waterPi = breakRaw(water);
  const man = `Man made with ${sandPi} cups of sand and ${waterPi} liters of water`;
  return man;
};
console.log(maker(20, 15));
function mixer(a, b) {
  return a + b;
}
mixer(10, 70);

const thisYear = 2024;
const ageTolu = thisYear - 1990;
console.log(ageTolu);
console.log(typeof thisYear);
let x = 20 * 5;
x *= 2;
console.log(x);
let y = 40 + 20;
y /= 2;
console.log(y);
let z = 50 * 4;
z -= 50;

console.log(z);
const age = 12;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`He is ${age}, so ,he can drive🚘`);
} else if (!isOldEnough) {
  console.log(
    `He is ${age}, so ,he cant drive yet ❌..... Wait till ${
      18 - age
    } years time 😢`
  );
} else if (age > 75) {
  console.log(`baba is ${age},he cannot drive`);
}

const hasLicense = true;
const hasEye = false;
const knowRoad = true;
if (hasEye && hasLicense && knowRoad) {
  console.log("Caleb can drive");
} else {
  console.log("Let another person drive");
}

const isNigerian = false;
const isGhanian = false;
if (isGhanian || isNigerian) {
  console.log("He is African");
} else {
  console.log("we no sabi your papa");
}
hasEye && knowRoad
  ? console.log("hi")
  : isGhanian
  ? console.log("na Ghanian")
  : console.log("whats up");
const bill = 60;
const tip = bill >= 200 && bill <= 600 ? bill * 0.1 : bill * 0.25;
console.log(tip);
console.log(2 === "2");
const firstName = "Ayodele";
const lastName = "Toyin";
console.log(firstName + " " + lastName);
console.log(5 % 2);
let numb = 36;
const numbD = (numb += 25);
console.log(numbD);

for (let count = 15; count <= 20; count++) {
  console.log(`This is count ${count}`);
}

const birthYear = [1990, 1987, 1984, 1996, 1998];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  const yearNow = 2024;
  const age = yearNow - birthYear[i];
  ages.push(age);
}

console.log(ages);
console.log(document.querySelector(".hello"));

// document.querySelector(".hello").innerText = "hiiiii";
const text = document.querySelector(".hello");
const bounceImage = document.querySelector(".bounce-image");
document.querySelector(".click").addEventListener("click", function () {
  console.log(document.querySelector(".num").value);
  // document.querySelector(".hello").innerText =
  //   "The Image is visible at the moment";

  if (bounceImage.style.display === "none") {
    bounceImage.style.display = "block";
    text.innerHTML = "The Image is visible at the moment...... click to hide";
    text.style.backgroundColor = "green";
  } else {
    bounceImage.style.display = "none";
    text.innerHTML =
      "The Image is not visible at the moment........... click button to view";
    text.style.backgroundColor = "red";
  }
});
let food = "yam";
let drink = "water";
console.log(`i love ${food} and ${drink}`);
