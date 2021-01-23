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
const isTall = person => person.height >= 1.5 
const isTall2Option = ({height})=> height >= 1.5 
 //inside person will be recive each one of the elements of the array 
    //isn't necessary put return cuz its the default function
        //also isn't necessary put the { when its only one function }


var persons = [dario, michell, cruz, carolina, pele]
var tallPersons = persons.filter(isTall) //for make the filter we put as a condition the const function (const isTall)

console.log(tallPersons)

//challenge write filter of Smallest persons
const isSmall = ({height}) => height < 1.5
var smallPersons = persons.filter(isSmall) 

console.log(smallPersons)
