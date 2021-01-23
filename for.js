var cristian = {
    name: "Cristian",
    surname: "Ballesteros",
    age: 21,
    weight: 75
}
console.log(`At the beginning of the year ${cristian.name} weighs ${cristian.weight}kg`) //initial weight

const INCREASE_WEIGHT = 0.2 //the conversion to grams
const DAYS_OF_YEAR= 365

const gainWeight = person =>person.weigh +=INCREASE_WEIGHT
const slimDown = person => person.weight -=INCREASE_WEIGHT
// the same that say
//  function gainWeight (person){
//      return person.weight += 200;
//  }
//For will contein three parts, the initial one, the condition part and the increase part,  (i) It acts as a counter for the 365 days of the year, when the counter pass to 366 the code does not will to execute, i ++ for the counter to increment 
for (var i = 1; i <= DAYS_OF_YEAR; i++){ //between {} will go the code that we want to repeat, each time, each day 
//year course simulation, the person can increase his weight or slim down
    var random = Math.random () //we ask for a random nomber with the Math module that bring us a number between 0 ... 1 
    
    if (random < 0.25){
        //gainWeight
        gainWeight(cristian)
    } else if (random < 0.5) {
        //slimDown
        slimDown(cristian)
    } //remember that cristian is an object, if we modify the object into a function, it will be change outside of the function too, if we don't want to happen, we have to create a new object disclosing the original one
}
console.log(`At the end oy the year ${cristian.name} pesa ${cristian.weight.toFixed(1)} kg`) 