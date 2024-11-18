(() =>{
    //number
    let age: number = 30;
    let price: number = 20.15;

    console.log("edad y precio son", age, price);

    // string

    let name: string = "juan";
    console.log(name);
    
    //boolean

    let isActive: boolean = true;
    console.log(isActive);

    //array

    let numbers : number[] = [1,2,3]
    let names : string[] = ["tatiana","Camila"]

    console.log(numbers, names);

    //tupla 
    let person: [string, number] = ["ana", 32]
    
    
    console.log(person);

    //any
    let randomValue: any = "Hola"
    console.log(randomValue);
    randomValue = 20;
    console.log(randomValue);
    randomValue = false;
    console.log(randomValue);

    //objet
    let myObject: object = {name: "laura", age: 20};
    console.log(myObject);
        
    
})()