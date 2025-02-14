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
const double = ages.map((age) => age * 2);
console.log(double);
