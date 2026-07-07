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
console.log ("el pokemon "  + datosjson.name.toUpperCase()  + " el id  " +  datosjson.id )

 console.log ("Tipos del pokemon:")
    for(let kTipos = 0; kTipos< datosjson.types.length; kTipos ++){
        //console.log (datos.types[kTipos].type.name )

        acomulador = acomulador + "/" + datosjson.types[kTipos].type.name 
    } 

    console.log ( "tipos: " + acomulador );

}


consultarPokemon("Pikachu");
consultarPokemon("ditto");


