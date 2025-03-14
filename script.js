const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", () => {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess) {
    document.querySelector(".message").innerHTML =
      "Input a valid number in the box";
  } else if (userGuess === secretNumber) {
    document.querySelector(".message").innerHTML = "You don get am";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secNum").innerHTML = secretNumber;
  } else if (userGuess > 20) {
    document.querySelector(".message").innerHTML =
      " eye dey pain you? we say between 1 and 20";
  } else if (userGuess > secretNumber) {
    document.querySelector(".message").innerHTML = "guess too high";
  } else if (userGuess < secretNumber) {
    document.querySelector(".message").innerHTML = "guess too low";
  }
});
