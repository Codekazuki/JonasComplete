"use strict";

//short circuiting
// || operator ...... it returns the first truthy value, or the last value if none is true

console.log(undefined || null || NaN || 0 || "");

// && operator returns the first falsy value or the last value if all are true

// console.log(34 && true);
console.log("Jesus is Lord");
const num = [1, 2, 3];
console.log(num.length);

const school = "code with kazuki";
const course = "javascript";
console.log(course[2]);
console.log(school.length);
console.log(course.indexOf("a"));

//slice
console.log(school.slice(10, 16));
console.log(course.slice(-1));
//a & b .....science, c & d ...... commercial .... e & f ....arts
// const checkClass = (arm) => {
//   const individualClass = arm.slice(-1);
//   if (individualClass === "a" || individualClass === "b") {
//     console.log("na science class");
//   } else if (individualClass === "c" || individualClass === "d") {
//     console.log("Na commercial student");
//   } else if (individualClass === "e" || individualClass === "f") {
//     console.log("na Arts students");
//   } else {
//     console.log("na mechanic");
//   }
// };
// checkClass("5b");
// checkClass("5c");
// checkClass("5e");
// checkClass("5p");
// checkClass("53");
const checkCountry = (check) => {
  const nationality = check.slice(-2);
  if (nationality === "ng") {
    console.log("Is a Nigerian");
  } else if (nationality === "gh") {
    console.log("Is a Ghanian");
  } else if (nationality === "us") {
    console.log("Is an American");
  } else {
    console.log("Is an Ijebu");
  }
};
checkCountry("3456ng");
checkCountry("3456gh");
checkCountry("3456us");
checkCountry("345346us");

console.log(school.toLowerCase());
console.log(school.toUpperCase());
const country = "Nigeria";

const firstName = "   sule";

const lowerYet = firstName.trim().toLowerCase();
console.log(lowerYet[0].toUpperCase() + lowerYet.slice(1));
const secondName = "   Abdul";
console.log(secondName);
console.log(secondName.trim());
function formatName(name) {
  const lowerYet = name.trim().toLowerCase();

  if (lowerYet.length === 0) {
    ("Put a valid name");
  } else {
    lowerYet[0].toUpperCase() +
      lowerYet.slice(1, -1) +
      lowerYet[name.length - 1].toUpperCase();
  }
}
console.log(formatName("biodun"));
console.log(formatName(""));
