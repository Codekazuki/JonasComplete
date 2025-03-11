const init = () => {
  const myName = "Ade";
  const callName = () => {
    console.log(`hello ${myName}`);
  };
  callName();
};
init();

const cutFruit = (fruit) => {
  return fruit / 0.25;
};

const makeJuice = (mango, pawpaw) => {
  const mangoPieces = cutFruit(mango);
  const pawpawPieces = cutFruit(pawpaw);
  console.log(
    `Juice with ${mangoPieces} pieces of mango and ${pawpawPieces} pieces of pawpaw`
  );
};
makeJuice(150, 250);

const numbers = [5, 54, 23, 5, 18];
const addup = numbers.reduce((acc, sum, i, arr) => {
  return (acc += sum);
}, 0);
console.log(addup);
const greaterthan20 = numbers.filter((el) => {
  return el > 20;
});
console.log(greaterthan20);

const addition = numbers.reduce((acc, summ) => {
  return (acc = acc + summ);
}, 0);
console.log(addition);
