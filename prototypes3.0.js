//Herency in prototypes
function Person(name, surname, height){  
    this.name =  name
    this.surname = surname
    this.height = height
 }
 Person.prototype.imTall = function (){
    return this.height >= 1.8
}
Person.prototype.sayHi = function(){
    console.log(`Hi, my name is ${this.name} ${this.surname}`)
}

function Developer(name, surname){
    this.name = name
    this.surname = surname
}

Developer.prototype.sayHi = function (){
    console.log(`Hi my name is ${this.name} ${this.surname} and im developer`)
}

var cristian = new Person('Cristian', 'Ballesteros', 1.80)
var erika = new Person ('Erika', 'Ojotuerto', 1.48)
var arturo = new Person ('Arturito', 'Arturote', 1.81)