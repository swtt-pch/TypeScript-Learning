
// 1 - NUMBER
let x: number = 10;

console.log(x)

const y: number = 15.29182

console.log(typeof y)
console.log(y.toPrecision(3))

// 2 - STRING 
let firstname: string = "Igor";

console.log(firstname.toUpperCase())

let fullname: string;

const lastname: string = "Souza"

fullname = firstname + " " + lastname

console.log(fullname)

// 3 - BOOLEAN
let isRaining: boolean = false
console.log(isRaining)
console.log(typeof isRaining)

isRaining = true;
console.log(isRaining)

// 4 - inference e annotation
const ann: string = "teste" 
let inf = "teste"

// inf = 1; ERROR

console.log("Testando")