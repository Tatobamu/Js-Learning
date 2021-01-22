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
const ADULT_AGE = 18; 

//FUNCTION CONVERTING  TO ARROW FUCNTION

// function ageChecker2 (person){  //This bring us a true or a false
//     return person.age >=ADULT_AGE//With the comparison with a global scope variable
// }

// const ageChecker2 = function (person){
//     return person.age >=ADULT_AGE
// }

// const ageChecker2 = (person) =>{ //we save the function write
//     return person.age >=ADULT_AGE  //Always that we read a => we must know that is a function
// }


// const ageChecker2 = person => person.age >=ADULT_AGE//when there is only an attribute inside the function we can obviate the ()
    // return 
   
 //when the only task of the function its return somethin, we can obviate that too, by default all functions are  a return, and also the {}, Knowing that implicitly its going to return the value of the function, in this case the comparision is made *person.age >=ADULT_AGE* and return the value of that comparision

//  And also we can Deconstruct the parameter of the function, puting a Object: 
 const ageChecker2 = ({age})=> age >=ADULT_AGE
 const ageChecker3 = ({age}) => !ADULT_AGE({age}) //Check young age

function ageChecker (person){
    if (ageChecker2(person)){
        console.log(`${person.name} ${person.surname} is adult with ${person.age} years old`);
    } else {
        console.log(`${person.name} ${person.surname} is younger with ${person.age} years old`);
    }
}

function allowAccess (person){
    if (!ageChecker2 (person)){
        console.log(`Access Denied`);
         }
  }

  