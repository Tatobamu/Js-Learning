const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const opts = {crossdOMAIN: true}

function getCharacter (id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id'), id}`

    $.get(url, opts, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`)
    })

}

getCharacter(1);
