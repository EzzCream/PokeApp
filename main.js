import { getRandomInt } from './helpers/getNumerRandom.js';


async function callPoke() {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1008)}`,
	);
	const { name, sprites } = data;
	const imgPokemon = sprites.other.home.front_default;
	document.querySelector('.pokemon').innerHTML = `
    <div>
      <h1>${name}</h1>
      <img height= 280px width=60% src="${imgPokemon}" alt="pokemon">
    </div>
  `;
}

callPoke();
