(() => {
    interface User {
        id: number,
        name: string,
        age: number,
        isActive: boolean,
    }
    const user1: User = {
        id: 123,
        name: "Sofia",
        age: 25,
        isActive: true
    }
    console.log(user1);
    console.log(user1.name);

    interface Role {
            admin: boolean
    }

    const userAdmin: User & Role = {
        admin: true,
        id : 123,
        name: "asd",
        age: 20,
        isActive: false
    }


    

    console.log("nuestro usuario administrador es:", userAdmin.name);
    
    

    
 
})()