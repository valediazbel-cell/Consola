async function consultarPokemon(nombrePokemon){
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
    const datos = await respuesta.json();
    return datos
}



function obtenerStat (datos, nombreStat){

    for(let kstats = 0; kstats< datos.stats.length; kstats ++){
        console.log ( "stat.nombre:"  +  datos.stats[kstats].stat.name )
        if (nombreStat == datos.stats[kstats].stat.name ) {
           
            return datos.stats[Kstats].base_stat
        } 
    } 
    return null
   
}

function compararPokemon (nombre1, nombre2, stat) {

 let datos1 = consultarPokemon (nombre1) 
 let base1 = obtenerStat (datos1, stat)

 let datos2 = consultarPokemon (nombre2)
 let base2 = obtenerStat (datos2, stat)

 if (base1 == null ||base2) { 
 console.log (" incorrecto")
 }
 if (base1 < base2) {
    console.log ("Gana",nombre2 )

 } else if (base1> base2){
    console.log ("Gana", nombre1)

 } else { console.log ( "empate")}


}

