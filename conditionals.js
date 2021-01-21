var Cristian = {
    name: "Tato",
    age:"22",
    surname: "Ballesteros"
}

var Sara = {
    name: "Sara",
    age: "16",
    surname: "Millana"
}
//To make the code more readable we can use... 
const ADULT_AGE = 18; //Defined in the global scope, A constant variable, must be defined with CAPITAL_LETTERS for good practices 


function ageChecker2 (person){  //This bring us a true or a false
    return person.age >=ADULT_AGE//With the comparison with a global scope variable
}

function ageChecker (person){
    if (ageChecker2(person)){//we put the function here as a parameter
        console.log(`${person.name} ${person.surname} is adult with ${person.age} years old`);
    } else {
        console.log(`${person.name} ${person.surname} is younger with ${person.age} years old`);
    }
}

ageChecker(Sara);
ageChecker(Cristian);