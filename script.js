console.log("hello");
const catFactElement = document.getElementById("catFact");
const newFactBtn = document.getElementById("newFactBtn");

const catAPI = "https://catfact.ninja/fact";

async function fetchFact() {
  try {
    catFactElement.textContent = "loading....";
    const result = await fetch(catAPI);
    if (!result.ok) {
      throw new Error(`${result.status}`);
    }
    const data = await result.json();

    catFactElement.textContent = data.fact;
  } catch (error) {
    console.log(Error);
  }
}
fetchFact();
newFactBtn.addEventListener("click", fetchFact);

async function fetchPredictedAge(name) {
  try {
    const resp = await fetch(`https://api.agify.io?name=${name}`);
    if (!resp.ok) {
      throw new Error(`${resp.status}`);
    }
    const data = await resp.json();
    const result = document.getElementById("result");
    result.textContent = `${name} is ${data.age}years old now`;
  } catch (error) {
    console.error(error);
  }
}
fetchPredictedAge();

document.getElementById("wrappingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name) {
    fetchPredictedAge(name);
  }
});
