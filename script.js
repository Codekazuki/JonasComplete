const countChar = (word, char) => {
  return word.toLowerCase().split(char).length - 1;
};
console.log(countChar("javA", "a"));
