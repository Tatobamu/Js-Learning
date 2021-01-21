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
onst ADULT_AGE = 18; 
function ageChecker2 (person){
    return person.age >=ADULT_AGE
}
function ageChecker (person){
    if (ageChecker2(person)){
        console.log(`${person.name} ${person.surname} is adult with ${person.age} years old`);
    } else {
        console.log(`${person.name} ${person.surname} is younger with ${person.age} years old`);
    }
}