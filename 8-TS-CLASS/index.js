"use strict";
// 1 - class fields
class User {
}
const igor = new User();
igor.name = "Igor";
igor.age = 22;
// error: igor.job = "Programmer"
console.log(igor);
// 2 - Contructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("Joao", 22);
console.log(joao);
// error: const pedro = new NewUser("Pedro")
// error: const pedro = new NewUser(12, 12)
// 3 - readonly field
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca.wheels);
fusca.name = "acsuF";
// error: fusca.wheels = 3
// 4 - inheritance and super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator, destroyer);
// 5 - methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey, Stranger");
    }
}
const jimmy = new Dwarf("jimmy");
console.log(jimmy.name);
jimmy.greeting;
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `title: ${this.title}`;
    }
}
const myPost = new blogPost("title 1");
console.log(myPost.itemTitle());
// 12 - protected 
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("protected");
    }
}
class F extends E {
    getX() {
        return this.x;
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
// error: console.log(fInstance.x)
console.log(fInstance.getX());
fInstance.showProtectedMethod();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    getName() {
        return this.name;
    }
    privateMethod() {
        console.log("private method");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObject = new PrivateClass();
// error: console.log(pObject.name)
console.log(pObject.getName());
pObject.showPrivateMethod();
