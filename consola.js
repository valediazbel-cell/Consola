
const prompt = require("prompt-sync")();

async function consultarPokemon(){
    const pokemon = prompt ("ingrese su pokemon:");
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const datos = await respuesta.json();
    
    console.log (datos.name)
   
    
}
consultarPokemon();