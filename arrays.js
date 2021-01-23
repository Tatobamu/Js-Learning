var dario = {
    name: 'Dario',
    surname: 'Bello',
    height: 1.25
}
var carolina = {
    name: 'Carolina',
    surname: 'Ballesteros',
    height: 1.10
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

//persons in console to see the array
//persons[0] to see the object index 0 (first object)
//persons[].surname (or other keyword) to see the property of object in the position that we want


persons.forEach(person =>{
    console.log(`${person.name} measures ${persons.height}`)
});