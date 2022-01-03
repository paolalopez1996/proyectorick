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
      
      <img src="https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg" id= "imagenes"   >
     
      </div>
      <div>
     
      </div>

      `
      
    }
    return section.innerHTML = info;

})


let miBoton = document.getElementById("miBoton")
miBoton.addEventListener("click", saludar);
function saludar(){
    alert("Holaaaaaaaaaaaaa");
}

window.addEventListener('scroll', function(){
    let fotos = document.getElementById('imagenes')
    let posicionObj1 = fotos.getBoundingClientRect().top;
    console.log(posicionObj1)
    let tamañoDePantalla = window.innerHeight/3;
    

    for (let i = 0; i < imagenes.length; i++){
    if(posicionObj1 < tamañoDePantalla){
        fotos.style.animation = 'mover 1s ease-out'
    }
}

});


};


document.onload = init();
