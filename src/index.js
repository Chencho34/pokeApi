import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {getPokemon} from './cleanAPI.js';

const id = 1;
// const pokemonInformation = getPokemon(id);

getPokemon(id).then((info) => {
console.log(info);
const span = document.getElementById('pokemon-name');
const h1 = document.createElement('h1');
 h1.innerHTML = `
    ${info.name}
 `
 span.appendChild(h1);
});
