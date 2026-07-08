async function consultarPokemon( nombrePokemon){
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
   
    
     if (!respuesta.ok) {
    console.log("Algo salió mal. Código:", respuesta.status);
    return; 

    }

 const datos = await respuesta.json();

    

   mostrarFicha (datos)

   
    
}

function mostrarFicha( datosjson) {

    let acomulador = ""
console.log ("el pokemon "  + datosjson.name.toUpperCase()  + " el id  " +  datosjson.id + )

 console.log ("Tipos del pokemon:")
    for(let kTipos = 0; kTipos< datosjson.types.length; kTipos ++){
        //console.log (datos.types[kTipos].type.name )

        acomulador = acomulador + "/" + datosjson.types[kTipos].type.name 
    } 

    console.log ( "tipos: " + acomulador );

console.log ("Altura: " + datosjson.height*10 + "cm")
console.log ("Peso:" + datosjson.weight  + " kg")

console.log ("Habilidades")

     console.log ("Habilidad del pokemon:")
    for(let kability = 0; kability< datosjson.abilities.length; kability ++){
        console.log ( datosjson.abilities[kability].ability.name 
            + (  datosjson.abilities[kability].ability.is_hidden ? " -oculta" : ""  ) )
    
    }
    console.log(datosjson)

    console.log ("Stats del pokemon:")
    for(let kstats = 0; kstats< datos.stats.length; kstats ++){
        console.log ( "stat.nombre:"  +  datosjson.stats[kstats].stat.name )
    
        console.log ("stat base:" + datosjson.stats[kstats].base_stat )
        
    }
}





consultarPokemon("Squirle");
consultarPokemon("Clefairy");


