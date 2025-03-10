const countChar = (word, char) => {
  return word.toLowerCase().split(char).length - 1;
};
console.log(countChar("javA", "a"));
const numbers = [1, 2, 3, 4];
const abc = numbers.filter((item) => (item = 2));
console.log(abc);
const addUp = numbers.reduce((acc, cur, i) => {
  console.log(`Itiration ${i}....curr = ${acc}`);
  return acc + cur;
}, 0);
console.log(addUp);
