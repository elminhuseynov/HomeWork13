class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    changeName(newName){
        this.name = newName
    }
}



class User extends Person {
    constructor(name, surname, age, role, salary) {
        super(name, surname, age);
        this.role = role;
        this.salary = salary;
    }
}


class Player extends Person {
    constructor(name, surname, age, playerId) {
        super(name, surname, age);
        this.playerId = playerId;
    }
}


let person = new Person("Elmin", "Huseynov", 26);
console.log(person); 
person.changeName("Vusal")
console.log(person);


let user = new User("Emin", "Seyidov", 28, "Manager", 5000);
console.log(user);
user.changeName("Heyder")
console.log(user);


let player = new Player("Huseyn", "Quliyev", 22, "P12345");
console.log(player);
player.changeName("Ehmed")
console.log(player);
