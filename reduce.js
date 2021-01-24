//reduce an array to a unique value

var dario = {
    name: 'Dario',
    surname: 'Bello',
    height: 1.25,
    quantityOfBooks: 98
}
var carolina = {
    name: 'Carolina',
    surname: 'Ballesteros',
    height: 1.22,
    quantityOfBooks: 74
}
var pele = {
    name: 'Pelam',
    surname: 'Bre',
    height: 1.97,
    quantityOfBooks: 65
}
var cruz = {
    name: 'Daniel',
    surname: 'Cruza',
    height: 4.20,
    quantityOfBooks: 88
}
var michell = {
    name: 'Michell',
    surname: 'Orozco',
    height: 1.50,
    quantityOfBooks: 198
}
var persons = [dario, michell, cruz, carolina, pele]

// var acum = 0

// for (var i= 0; i< persons.length; i++){
//     acum = acum + persons[i].quantityOfBooks
// }
// console.log(`In total, all of them have ${acum} books`)
// ↑ Its a possibility 

const reducer = (acum, {quantityOfBooks})=> acum + quantityOfBooks
 //this function recives 2 parameters, accumulator and  each one of the elements (persons)
    //the only thing that we have to do its modify the value that we want to have the new accumulator
        //We deconstruct the person and we say that only ee going to access to the quantity of books
var totalBooks = persons.reduce(reducer, 0)
//the function passes the accumulated value for each element of the array
console.log(`In total, all of them have ${totalBooks} books`)