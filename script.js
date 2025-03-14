// DOM document object model
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", () => {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess || userGuess > 20) {
    document.querySelector(".message").innerHTML =
      "You never put better number";
    document.querySelector(".message").style.backgroundColor = "red";
    document.querySelector(".ins").style.display = "block";
  } else if (userGuess === secretNumber) {
    document.querySelector(".message").innerHTML =
      "You are smart .... ✅✅🏆🏆✅✅";
    document.querySelector("body").style.backgroundColor = "#D9E7E2";
    document.querySelector(".hiddenNumber").innerHTML = secretNumber;
    document.querySelector(".playAgain").style.display = "block";
  } else if (userGuess > secretNumber) {
    document.querySelector(".message").innerHTML =
      "Your head dry ...... Number is too high";
  } else if (userGuess < secretNumber) {
    document.querySelector(".message").innerHTML = "Dry head ,..... too low";
  }

  document.querySelector(".guess").value = "";

  document.querySelector(".playAgain").addEventListener("click", () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").innerHTML = "Start guessing";
    document.querySelector("body").style.backgroundColor = "";
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".hiddenNumber").innerHTML = "???";
  });
});
