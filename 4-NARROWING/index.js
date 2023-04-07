"use strict";
// 1 - type gaurd
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("error");
    }
}
sum("4", "45");
sum(12, 49.2);
sum(12, "10.2");
// 2 - check if value exists
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("error");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3, 4], "sum");
operations([1, 2, 3, 4], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("jhon");
const paul = new SuperUser("paul");
console.log(jhon, paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Hello, super ${user.name}`);
    }
    else if (user instanceof User) {
        console.log(`Hello, ${user.name}`);
    }
}
userGreeting(paul);
userGreeting(jhon);
// 4 - in operator
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const turca = new Dog("turca");
const bob = new Dog("bob", "pastor alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("o cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
