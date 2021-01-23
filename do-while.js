//Anda para la esquina a ver si llueve
var counter = 0

const rain = () => Math.random() < 0.25
 
do { //task to do
    counter ++ //counter will increase until rain
} while (!rain()) //Condition to fulfill to repeat more than once
//While do not rain, the counter will increase

var frecuency = counter ===1 ? "time": "times"; 
console.log(`I went to see if it rain ${counter} ${frecuency}`)