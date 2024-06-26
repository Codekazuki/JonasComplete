"use strict";
function a() {
  console.log("we are good");
}
let ade = function ben() {
  console.log("function expression");
};
let d = function (param1, param2) {
  console.log(
    `it will throw syntax error ${param1} times and render ${param2} times`
  );
};
d(6, 12);
ade();

setTimeout(function () {
  console.log("after 5 seconds");
}, 5000);

function x() {
  console.log("x");
  y();
}
function y() {
  console.log("y");
}
x(y);

document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  function closurePractice() {
    document.getElementById("clickMe").addEventListener("click", function () {
      document.getElementById(
        "clock"
      ).innerHTML = `Button clicked ${++count} times`;
    });
  }

  function resetButtonFunction() {
    document.getElementById("reset").addEventListener("click", () => {
      count = 0;
      document.getElementById("clock").innerHTML = `Reset Button Clicked`;
    });
  }

  closurePractice();
  resetButtonFunction();
});
