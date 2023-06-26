//Ejecutamos el llamado a la api, y con los resultados creamos los personajes
//que vamos guardando en nuestro arreglo
const callApi = async (url) => {
  try {
    const respArray = [];
    const respuesta = await axios.get(url);

    const respuestas = respuesta.data.results.map((item) => {
        const pers = new personaje(item.id, item.name);
        pers.especie = item.species;
        pers.imagen = item.image ? item.image : "./assets/img/not_available.jpeg";
        respArray.push(pers);
        
    });
    return respArray;
    
  } catch (error) {
    console.error(error);
  }
};

callApi("https://rickandmortyapi.com/api/character")
.then(personajesArray => {
    let spanRandM = document.getElementById("ricknmorty-cards");
    personajesArray.map(personaje => {spanRandM.innerHTML += personaje.show()})
})
.catch(error => {
    console.error(error);
});
