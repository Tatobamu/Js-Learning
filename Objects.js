var Cristian = {
    name: "Cristian",
    surname: "Ballesteros",
    age: 22
}
var Dario = {
    name: "Dario",
    surname: "Bello",
    age: 23
}

// function printNameinCapitalLetters(person) {  
//     console.log(person.name.toUpperCase())
// }

function printNameinCapitalLetters({name}) {  
    console.log(name.toUpperCase())
}

printNameinCapitalLetters (Cristian); 
printNameinCapitalLetters (Dario); 
printNameinCapitalLetters ({name: "Pepito"})
//printNameinCapitalLetters(); ERROR , We cannot destructure an object with out send the object that he waits, the atribute name

//printNameinCapitalLetters ({ Surname: "Gomez"}) this is also an error because the atribute of he function isn't Surname, it's name! 