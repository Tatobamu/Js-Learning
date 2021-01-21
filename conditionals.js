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


function ageChecker (person){
    if (person.age >= 18){
        console.log(`${person.name} ${person.surname} is adult with ${person.age} years old`);
    } else {
        console.log(`${person.name} ${person.surname} is younger with ${person.age} years old`);
    }
}

ageChecker(Sara);
ageChecker(Cristian);