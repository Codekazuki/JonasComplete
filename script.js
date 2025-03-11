const init = () => {
  const myName = "Ade";
  const callName = () => {
    console.log(`hello ${myName}`);
  };
  callName();
};
init();

const cutFruit = (fruit) => {
  return fruit * 4;
};

const makeJuice = (mango, pawpaw) => {
  const mangoPieces = cutFruit(mango);
  const pawpawPieces = cutFruit(pawpaw);
  console.log(`Juice with ${mangoPieces} mango and ${pawpawPieces} pawpaw`);
};
makeJuice(150, 250);
