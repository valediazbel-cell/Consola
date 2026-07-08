
const prompt = require("prompt-sync")();

async function consultarPokemon(){
    const pokemon = prompt ("ingrese su pokemon:");
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const datos = await respuesta.json();
    
    console.log (datos)

    console.log ("Tipos del pokemon:")
    for(let kTipos = 0; kTipos< datos.types.length; kTipos ++){
        console.log (datos.types[kTipos].type.name )

    }
     console.log ("Stats del pokemon:")
    for(let kstats = 0; kstats< datos.stats.length; kstats ++){
        console.log ( "stat.nombre:"  +  datos.stats[kstats].stat.name )
    
        console.log ("stat base:" + datos.stats[kstats].base_stat )
        
    }
   
     console.log ("Habilidad del pokemon:")
    for(let kability = 0; kability< datos.abilities.length; kability ++){
        
        console.log ( datos.abilities[kability].ability.name )

        
    }
   
    
}
consultarPokemon();