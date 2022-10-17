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
    let typeClass = "";

    switch (pokemon.types[0].type.name) {
      case "grass":
        typeClass = "grass";
        break;
      case "electric":
        typeClass = "electric";
        break;
      case "water":
        typeClass = "water";
        break;
      case "ground":
        typeClass = "ground";
        break;
      case "rock":
        typeClass = "rock";
        break;
      case "fairy":
        typeClass = "fairy";
        break;
      case "poison":
        typeClass = "poison";
        break;
      case "bug":
        typeClass = "bug";
        break;
      case "dragon":
        typeClass = "dragon";
        break;
      case "psychic":
        typeClass = "psychic";
        break;
      case "flying":
        typeClass = "flying";
        break;
      case "fighting":
        typeClass = "fighting";
        break;
      case "normal":
        typeClass = "normal";
        break;
      case "fire":
        typeClass = "fire";
        break;
      case "ghost":
        typeClass = "ghost";
        break;
      case "ice":
        typeClass = "ice";
        break;
    }

    cardsContainer.innerHTML += `<div class="card ${typeClass}">
    <img src=${pokemon.sprites.front_default} alt="" />
    <span>#${pokemon.id}</span>
    <h2>${pokemon.name}</h2>
    <p>Type: ${pokemon.types[0].type.name}</p>
  </div>`;
  });
});
