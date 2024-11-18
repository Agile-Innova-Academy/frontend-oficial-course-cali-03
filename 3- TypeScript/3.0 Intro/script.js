"use strict";
(() => {
    //number
    let age = 30;
    let price = 20.15;
    console.log("edad y precio son", age, price);
    // string
    let name = "juan";
    console.log(name);
    //boolean
    let isActive = true;
    console.log(isActive);
    //array
    let numbers = [1, 2, 3];
    let names = ["tatiana", "Camila"];
    console.log(numbers, names);
    //tupla 
    let person = ["ana", 32];
    console.log(person);
    //any
    let randomValue = "Hola";
    console.log(randomValue);
    randomValue = 20;
    console.log(randomValue);
    randomValue = false;
    console.log(randomValue);
    //objet
    let myObject = { name: "laura", age: 20 };
    console.log(myObject);
})();
(() => {
    const user1 = {
        id: 123,
        name: "Sofia",
        age: 25,
        isActive: true
    };
    console.log(user1);
    console.log(user1.name);
    const userAdmin = {
        admin: true,
        id: 123,
        name: "asd",
        age: 20,
        isActive: false
    };
    console.log("nuestro usuario administrador es:", userAdmin.name);
})();
(() => {
    let message = "Hello, typescript";
    console.log(message);
})();
//# sourceMappingURL=script.js.map