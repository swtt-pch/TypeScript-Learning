// 1 - generics 
function showData<T>(arg: T): string {
    return `data: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))
console.log(showData(true))
console.log(showData([]))
console.log(showData([1,2,3]))

// 2 - constraint in generics
function showProductName<T extends {name: string}>(obj: T){
    return `Product name: ${obj.name}`
}

const myObj = {name:"door", color: "white"}
const otherObj = {name: "car", wheel: 4, engine: 1.0}
const thirdObj = {price: 19.00, category: "clothes"}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
// error: console.log(showProductName(thirdObj))

// 3 - generics with interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "VW", wheels: 4, engine:1.0, color: "blue"}
const myPen:Pen = {name: "Bic", wheels: false, engine: false, color:"black"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `The key ${key.toString()} is present in object that has the value of ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// error: console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}
type C = keyof Character
function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Igor",
    age: 22,
    hasDriveLicense: false
}

console.log(showCharName(myChar, 'age'))
// error: console.log(showCharName(myChar, 'teste'))
// error: showCharName("mychar", 'teste')

// 6 - typeof type operator

const userName: string = "Igor"
const userName2: typeof userName = "João"
// error: const userName3: typeof userName = 10

type x = typeof userName

const userName4: x = "Joaquim"

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km'] 

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'truck desc'
}

function showKm(km:Km){
    console.log(`Vehicle km: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

// 8 - conditional types
interface A {}
interface B extends A {}
interface Teste {
    showName():string
}

type myType = B extends A ? number : string

const someVar1:myType = 5

// error: const someVar2: myType = "teste"
type myTypeB = Teste extends {showName():string} ? string : boolean;

// 9 - template literal type
type testA = 'text'

type CustomType = `some ${testA}`

const teste:CustomType = "some text"

// error: const teste2:CustomType = "some text 2"

type a1 = "test"
type a2 = "union"
type a3 = `${a1}` | `${a2}`