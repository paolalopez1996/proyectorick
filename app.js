//https://pokeapi.co/
//https://rickandmortyapi.com/api/character


const init = () => {
fetch('https://rickandmortyapi.com/api/character')
.then((respuesta) => {
    return respuesta.json()
})
.then((datos) => {
    const personajes = datos.results;
    const section = document.querySelector('section')
    let info = ''
    let contadorParaImagen = 0;

for (let i = 0; i < personajes.length; i++) {
    contadorParaImagen + i
    console.log(personajes[i].origin.name);
      info += `
      <div class="tarjetas" >
      
      <p class = "element"  > name: ${personajes[i].name}, origen: ${personajes[i].origin.name} </p>
      <p class = "element"  > gender: ${personajes[i].gender} </p>
      
      <img src="https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg" class= "imagenes"   >
      <div>
      `
      
    }
    return section.innerHTML = info;

})

}

document.onload = init();
