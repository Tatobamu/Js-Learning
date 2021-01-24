function Person(name, surname, height){  
    this.name =  name
    this.surname = surname
    this.height = height
 }
//We have to put always the prototype functions together on the start of the code, if we dont, thers gonna be errors that cant leave run the code
Person.prototype.imTall = function (){
    return this.height >= 1.8
}//another solution of put height inside prototype, with the tall feature 
Person.prototype.sayHi = function(){
    console.log(`Hi, my name is ${this.name} ${this.surname}`)
}

var cristian = new Person('Cristian', 'Ballesteros', 1.80)
var erika = new Person ('Erika', 'Ojotuerto', 1.48)
var arturo = new Person ('Arturito', 'Arturote', 1.81)

//using arrow functions with this is going to take "Window" as this, and not what we want to be "this"
//window is the global object inside browser, and when we use this into an arrow function its going to take the next this as object and in his default the window object
// we can prove that using a arrow function with this and making the strict comparison this === window that its true