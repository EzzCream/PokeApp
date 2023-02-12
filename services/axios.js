import axios from 'axios';
import { getRandomInt } from '../helpers/getNumerRandom.js';

export async function callPoke() {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${getRandomInt(151)}`,
	);
	const { name, sprites, types, height, id, weight, abilities } = data;

	return {
		name,
		sprites,
		types,
		height,
		id,
		weight,
		abilities,
	};
}
