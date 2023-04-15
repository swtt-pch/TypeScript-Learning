"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - decorator exemple
function myDecorator() {
    console.log("starting decorator");
    return function (target, propertyKey, descriptor) {
        // console.log("exec decorator")
        // console.log(target)
        // console.log(propertyKey)
        // console.log(descriptor)
    };
}
class myClass {
    constructor() {
        this.name = "aaa";
    }
    testing() {
        console.log("finished the exec of method");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
//const myObj = new myClass()
//myObj.testing()
// 2- multiple decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("exec a.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("exec b.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("exec c.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("finished MultipleDecorators exec");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Creating user");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const user = new User("user");
// 4 - method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `Name of machine: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("trator");
console.log(trator);
// 5 - access decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Name: ${this.name}`;
    }
    get showAge() {
        return `Age: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 5 - property decorator
// 1 -> 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);
// 7 - real exemple with decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(1);
const newPen = new Pen(2);
console.log(newBook, newPen);
console.log(newBook.createdAt);
console.log(newPen.createdAt);
// 8 - real exemple method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        //console.log(childFunction)
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("User already posted");
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post content: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("My first post", newPost.alreadyPosted);
newPost.post("Second post", newPost.alreadyPosted);
// newPost.post("Second post", newPost.alreadyPosted)
// 9 - real exemple property decorator
function maxChar(limit) {
    return function (target, key) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`The value must have ${limit} digits`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    maxChar(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin("pedro123456");
console.log(pedro);
let adm = new Admin("adm123456");
console.log(adm);
