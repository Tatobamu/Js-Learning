var dario = {
    name: 'Dario',
    surname: 'Bello',
    height: 1.25
}
var carolina = {
    name: 'Carolina',
    surname: 'Ballesteros',
    height: 1.22
}
var pele = {
    name: 'Pelam',
    surname: 'Bre',
    height: 1.97
}
var cruz = {
    name: 'Daniel',
    surname: 'Cruza',
    height: 4.20
}
var michell = {
    name: 'Michell',
    surname: 'Orozco',
    height: 1.50
}
var persons = [dario, michell, cruz, carolina, pele]

// const heightToCms = person => {
//     //person.height = person.height * 100
//     person.height *= 100
//     return person
// }
// var personsCms = persons.map(heightToCms)
// console.log(personsCms)
//THIS CODE MODIFIES THE ORIGINAL ARRAY BECOUSE person-height *= 100, so we have to return a new object with the height modified 
const heightToCms = person => {
    return{
        ...person,
        height: person.height * 100
    } //this constitutes a new indistinct object of the original one 
}
var personsCms = persons.map(heightToCms)
console.log(personsCms)
