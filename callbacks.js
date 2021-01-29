const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'

const luke_url = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossdOMAIN: true}
$.get(luke_url, opts, function (luke){
    console.log(`Hola yo soy ${luke.name}`)
})
    
//callback, function that will be executed in a future, through $get, when the request ends

//(Arguments) a variable that all the functions have, give us an array with the parameters that the function recives 
// $.get(luke_url, opts, function (luke){
//     console.log(arguments)
// }) 