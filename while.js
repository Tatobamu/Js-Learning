var cristian = {
    name: "Cristian",
    surname: "Ballesteros",
    age: 21,
    weight: 75
}
console.log(`At the beginning of the year ${cristian.name} weighs ${cristian.weight}kg`)

const INCREASE_WEIGHT = 0.3 
const DAYS_OF_YEAR= 365

const gainWeight = person =>person.weigh +=INCREASE_WEIGHT
const slimDown = person => person.weight -=INCREASE_WEIGHT
const eatALot = () => Math.random() < 0.3
const doSport = () => Math.random() < 0.4

const META = cristian.weight - 3;
var days = 0;

while (cristian.weight > META){
    
    if(eatALot()){
        gainWeight(cristian)

    }
    if (doSport()){
        slimDown(cristian)
    }
    days += 1
}

console.log(`Went ${days} days until ${cristian.name} slim down 3kg`) 