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
const numbers = [1, 2, 3, 4, 4];
