async function consultarPokemon( nombrePokemon){
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
   
    
     if (!respuesta.ok) {
    console.log("Algo salió mal. Código:", respuesta.status);
    return; 

    }

 const datos = await respuesta.json();

    console.log ("el pokemon" + datos.name + " el id "+  datos.id )

   
    
}


consultarPokemon("pikachu");
consultarPokemon("ditto");
consultarPokemon("vaca")