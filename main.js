import { callPoke } from './services/axios.js';
import './style.css';

const { name, sprites, types, height, id, weight, abilities } =
	await callPoke();

const imgPokemon = sprites.other.home.front_default;
document.querySelector('#pokemon').innerHTML = `
    <div>
       <h1>${name}</h1>
       <img src="${imgPokemon}" alt="pokemon">
     </div>
   `;

let typesPokemon = `
<h3>Numero pokedex: ${id}</h3>
<h3>Altura: ${height * 0.1} M</h3>
<h3>Peso: ${weight * 0.1} kg</h3>
<h3>Tipo:</h3>
`;

function type() {
	for (let i = 0; i < types.length; i++) {
		let typePoke = `
		<h4>${types[i].type.name}</h4>
	`;
		typesPokemon = typesPokemon + typePoke;
		document.querySelector('#datos').innerHTML = typesPokemon;
	}
}

console.log(abilities);

let ab = `
<h3>Habilidades:</h3>
`;

function habilidades() {
	for (let i = 0; i < abilities.length; i++) {
		let abilitiesPoke = `
		<h4>${abilities[i].ability.name}</h4>
	`;
		ab = ab + abilitiesPoke;
		document.querySelector('#fortalezas').innerHTML = ab;
	}
}

habilidades();

type();
