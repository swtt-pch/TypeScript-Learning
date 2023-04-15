// 1 - decorator exemple
function myDecorator() {
    console.log("starting decorator")
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ){
        // console.log("exec decorator")
        // console.log(target)
        // console.log(propertyKey)
        // console.log(descriptor)
    }
}

class myClass {
    name: string = "aaa"
    @myDecorator()
    testing() {
        console.log("finished the exec of method")
    }
}

//const myObj = new myClass()

//myObj.testing()

// 2- multiple decorators
function a() {
    return function(       
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("exec a.")
    }
}
function b() {
    return function(       
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("exec b.")
    }
}
function c() {
    return function(       
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("exec c.")
    }
}

class MultipleDecorators {
    @c()
    @a()
    @b()
    testing() {
        console.log("finished MultipleDecorators exec")
    }
}

// 3 - class decorator
function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Creating user")
    }
}

@classDec
class User {
    name
    constructor(name: string){
        this.name = name;
    }
}

const user = new User("user")

// 4 - method decorator
function enumerable(value:boolean){
    return function(        
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ){
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name:string){
        this.name= name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return`Name of machine: ${this.name}`
    }
}

const trator = new Machine("trator")
console.log(trator)

// 5 - access decorator

class Monster {
    name?;
    age?;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
    @enumerable(true)
    get showName() {
        return `Name: ${this.name}`
    }
    @enumerable(true)
    get showAge() {
        return `Age: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 5 - property decorator
// 1 -> 00001
function formatNumber() {
    return function(        
        target: Object, 
        propertyKey: string, 
    ){
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

class ID{
    @formatNumber()
    id

    constructor(id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)

console.log(newItem.id)

// 7 - real exemple with decorator
function createdDate(created: Function){
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

@createdDate
class Pen {
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(1)

const newPen = new Pen(2)

console.log(newBook, newPen)
console.log(newBook.createdAt)
console.log(newPen.createdAt)

// 8 - real exemple method decorator
function checkIfUserPosted(){
    return function(
        target: Object, 
        key: string | Symbol,
        descriptor: PropertyDescriptor){
            const childFunction = descriptor.value
            //console.log(childFunction)
            descriptor.value = function(...args: any[]){
                if(args[1] === true){
                    console.log("User already posted")
                }else {
                    return childFunction.apply(this, args)
                }
            }
            return descriptor
        }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content:string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post content: ${content}`)
    }
}

const newPost = new Post()

newPost.post("My first post", newPost.alreadyPosted)
newPost.post("Second post", newPost.alreadyPosted)
// newPost.post("Second post", newPost.alreadyPosted)

// 9 - real exemple property decorator
function maxChar(limit: number){
    return function(target:Object, key: string){
        let value: string
        const getter = function(){
            return value
        }
        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`The value must have ${limit} digits`)
                return
            } else {
                value = newVal
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}
class Admin {
    @maxChar(10)
    username 

    constructor(username: string){
        this.username = username
    }
}

let pedro = new Admin("pedro123456")
console.log(pedro)

let adm = new Admin("adm123456")
console.log(adm)