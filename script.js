console.log("hello");
// const api = "https://reqres.in/api/users";

// const hi = fetch(api)
//   .then((res) => res.json())
//   .then((bread) => {
//     console.log(bread);
//     console.log(bread.data[0].first_name);
//   });

// const catAPI = "https://catfact.ninja/fact";
// const catFact = fetch(catAPI)
//   .then((response) => response.json())
//   .then((fetchedFact) => {
//     console.log(fetchedFact);
//     console.log(fetchedFact.fact);
//     console.log(fetchedFact.length);
//   })
//   .catch((err) => {
//     console.log("This thing don lazzdent:", err);
//   });
const catAPI = "https://catfact.ninja/fact";
async function getCat() {
  let result = await fetch(catAPI);
  let data = await result.json();

  console.log(result);
  console.log(data);
}
getCat();
const checkGender = "https://api.genderize.io?name=Temitope";
const check = fetch(checkGender)
  .then((resp) => resp.json())
  .then((factos) => {
    console.log(factos);
    console.log(`${factos.name} is a ${factos.gender} from sos so country`);
    console.log(`Gender: ${factos.gender}`);
  })
  .catch((err) => {
    console.log(err);
  });
// const checkCountry = "https://api.nationalize.io?name=Biodun";
// const countrycheck = fetch(checkCountry)
//   .then((response) => response.json())
//   .then((fetchedNationality) => {
//     console.log(fetchedNationality);
//     console.log(fetchedNationality.country[0].country_id);
//   });
