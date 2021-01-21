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

function printNameinCapitalLetters(person) {  
    console.log(person.name.toUpperCase())
}

function printNameinCapitalLetters({name}) {  
    console.log(name.toUpperCase())
}

 printNameinCapitalLetters (Cristian); 
 printNameinCapitalLetters (Dario); 
 printNameinCapitalLetters ({name: "Pepito"})
//printNameinCapitalLetters(); ERROR , We cannot destructure an object with out send the object that he waits, the atribute name

//printNameinCapitalLetters ({ Surname: "Gomez"}) this is also an error because the atribute of he function isn't Surname, it's name! 

//DESTRUCTING OF OBJECTS 
function printNameinCapitalLetters(person) {  
    //var name = person.name
    var {name} = person

    console.log(name.toUpperCase())
}
printNameinCapitalLetters (Cristian); 
printNameinCapitalLetters (Dario); 

//Challengue Print Name n Age 

// function printNameNAge (person){
//     var {name, age} = person
//     console.log(`Hi my name is ${name} and im ${age}`);
// }
// printNameNAge(Dario);
// printNameNAge(Cristian);

//PARAMETERS AS A REFERENCE OR AS VALUE 

// function birthday(person){
//       person.age += 1;
// }
//Invoke since browser
// Before Check what the variable has inside 
// Call function
//check how the function modifies the global object
function birthday2(person){ 
    return {
    ...person,
    age: person.age + 1
     }
}
//we ask for return of a new object, the ... brings all values and attributes, we can modify them and add other if we want, in this case modify the age
//So we can do ...
var CristianOlder = birthday2(Cristian); 
CristianOlder
{name: "Cristian", surname: "Ballesteros", age: 23}
//keeping this new age in a new object 