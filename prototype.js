//Person protoype
//for define a prototype we have to define a function

//()parameters that will requiere initialize a new person
    //inside {} int the execute when we create a new {CONSTRUCTOR}
function Person(name, surname, height){  
   this.name =  name
   this.surname = surname
   this.height = height
   //here happen a return that its implictly by JavaScript THAT RETURN THE OBJECT THAT WE ARE CREATING
}
Person.prototype.myHeight = function (){
    this.height >= 1.80 ? console.log (`${this.name} is Tall`) : console.log(`${this.name} is small`)
}
Person.prototype.sayHi = function(){
    console.log(`Hi, my name is ${this.name} ${this.surname}`)
}

var cristian = new Person('Cristian', 'Ballesteros', 1.80)
// cristian.sayHi()
var erika = new Person ('Erika', 'Ojotuerto', 1.48)
var arturo = new Person ('Arturito', 'Arturote', 1.81)

//new a reserved word for create a new objects given a prototype and creates a new object named Person 

//.this reference the new object created 
//its a little rare put this.name = name but we should think that yet, in the object created in this, isnt exist the name atributte, we are assigning that here

//if we want that the person has a function of Say hi, and that all the persons that we create can make it we hace to (See line 15) it says that the prototype person its going to have an attribute that sayHi with a function, so when we put cristian.sayHi()  

//In this way we can create different persons for example (see line 21) And applies the attributes created as sayHi.So each one of them its going to keep internally into this, the values that we pass on, or that we want to keep, like height, in this way (see line 9) REMEMBER OF ADD THE ATTRIBUTE ALSO AS A PARAMETER OF THE PROTOTYPE