console.log('a')
//Set time out recives two parameters, (function and delay)
setTimeout (() => console.log('b'), 0) //function as reference for the time out, can be arrow function 
     //time expressed in milliseconds 
console.log('c')

setTimeout(() => console.log ('d'), 2000)
for (var i = 0; i< 100; i++) {

}
//in this example we will see that if we increase the for condition value to 1000000 for example, the other asynchronous tasks (setTimeout) cant be execute until the main code ends 