//Herency in prototypes
//The class person is created with the constructor method that its gonna execute when we need to create objects of this class 
class Person{ 
    constructor(name, surname, height){  
        this.name = name;
        this.surname = surname;
        this.height = height;
     }
    sayHi(){
        console.log(`Hi my name is ${this.name} ${this.surname}`);
    }
    imTall(){
        return this.height>1.8;
    }

//How to make one class inherit from another? the inheritance in Js its known as extension, so...
//Using the word extends to call the father class, with his constructor super, that reference the this.name =name, this.height=height, this.surname= surname of the father constructor
}
class Developer extends Person{
    constructor (name, surname, height){
        super(name, surname, height)
    }
    sayHi(){
        console.log (`Hi my name is ${this.name} ${this.surname} and im developer`) 
    }
}

// var cristian = new Person('Cristian', 'Ballesteros', 1.80)
// var erika = new Person ('Erika', 'Ojotuerto', 1.48)
// var arturo = new Developer ('Arturito', 'Arturote', 1.81)