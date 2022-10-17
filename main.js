const cardsContainer = document.querySelector(".container-cards");
const pokemons = [];

//* Promise Method

for (let index = 1; index <= 151; index++) {
  pokemons.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
}

let request = pokemons.map((url) => {
  return fetch(url).then((res) => res.json());
});

Promise.all(request).then((res) => {
  res.map((pokemon) => {
    cardsContainer.innerHTML += `<div class="card">
    <img src=${pokemon.sprites.front_default} alt="" />
    <span>#${pokemon.id}</span>
    <h2>${pokemon.name}</h2>
    <p>Type: ${pokemon.types[0].type.name}</p>
  </div>`;
  });
});
