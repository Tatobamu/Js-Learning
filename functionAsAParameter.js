class Person{ 
    constructor(name, surname, height){  
        this.name = name;
        this.surname = surname;
        this.height = height;
     }
     //if a function pass as a parameter, (true)execute de if block, bit if don't pass (false) 
    sayHi(fn){ 
        var {name, surname} = this
        console.log(`Hi my name is ${name} ${surname}`);
        if (fn){
            fn(this.name, this.surname)
        }
    }
    imTall(){
        return this.height>1.8;
    }

}
class Developer extends Person{
    constructor (name, surname, height){
        super(name, surname, height)
    }
    sayHi(fn){
        // var name = this.name
        // var surname = this.surname
        var {name, surname} = this
        console.log (`Hi my name is ${name} ${surname} and im developer`) 
        if (fn){
            fn(name, surname, true)
        }
    }
}

function answerHi (name, surname, isDev){
    console.log (`Good day ${name} ${surname}`)
    if(isDev){
        console.log(`Oh look, i didn't know that you are a dev`)
    }
}

var cristian = new Person('Cristian', 'Ballesteros', 1.80)
var erika = new Person ('Erika', 'Ojotuerto', 1.48)
var arturo = new Developer ('Arturito', 'Arturote', 1.81)

cristian.sayHi()
erika.sayHi(answerHi)
arturo.sayHi(answerHi)