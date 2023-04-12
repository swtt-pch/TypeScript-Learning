// 1 - object type for fuction with interface
interface Product {
    name: string,
    price: number,
    isAvalable: boolean
}

function showProductDetails(product: Product){
    console.log(`Name: ${product.name} and it price: ${product.price}`)
    if(product.isAvalable){
        console.log("Product is avaliable")
    }
}

const shirt:Product = {
    name: "Shirt",
    price: 19.99,
    isAvalable: true
}

showProductDetails(shirt)
showProductDetails({name: "shoes", price: 20.00, isAvalable: false})

// 2 - optional property in object
interface User {
    email: string,
    role?: string
}

function showUserDetails(user:User){
    console.log(`User email: ${user.email}`)
    if(user.role){
        console.log(`Role of user: ${user.role}`)
    }
}

const user1:User = {email:"user1@user1.com", role: "adm"}
const user2:User = {email: "user2@user2.com"}

showUserDetails(user1)
showUserDetails (user2)

// 3 - readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// error: fusca.wheels = 5;

// 4 - index signature
interface CoordObject {
    [index: string]:number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// error: coords.z = "aaa"

// 5 - Extending Types
interface Human {
    name: string, 
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const igor: Human = {
    name: "Igor",
    age: 22
}

console.log(igor)

const deku: SuperHuman = {
    name:"Deku",
    age: 18,
    superpowers: ["united states of smash"]
}

console.log(deku)

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number 
}

type HumanWithGun = Character & Gun

const arnold : HumanWithGun = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
}

console.log(arnold)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["apple", "orange", "banana"]
// error: myArray[3] = "pen"

console.log(myArray)

myArray.forEach((i) => {
    console.log("fruit: " + i)
})

myArray = myArray.map((item) => {
    return `Fruit: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number,number, number,number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// error: const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// error: const mixedArray: fiveNumbers = [1, true, "3", 4, 5]

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Igor", 22]
anotherUser[0] = "carlos"

// error: anotherUser[1] = "2"
console.log(anotherUser)

// 9 - tuplas with readonly
function showNumbers(numbers: readonly [number, number]){
    // error: numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])