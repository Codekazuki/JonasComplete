for (let i = 1; i <= 20; i++) {
  if (i > 1) {
    console.log(`This loop don run ${i} times`);
  } else {
    console.log(`This loop don run ${i} time`);
  }
}
const ages = [2, 3, 5, 7, 8];
for (let age = 0; age <= ages.length - 1; age++) {
  console.log(ages[age]);
}

const fetchDtata = async () => {
  try {
    const resp = await fetch();
    const data = await resp.json();
  } catch (error) {
    console.log(error);
  }
};
