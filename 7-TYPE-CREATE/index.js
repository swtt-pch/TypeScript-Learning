"use strict";
// 1 - generics 
function showData(arg) {
    return `data: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData([]));
console.log(showData([1, 2, 3]));
// 2 - constraint in generics
function showProductName(obj) {
    return `Product name: ${obj.name}`;
}
const myObj = { name: "door", color: "white" };
const otherObj = { name: "car", wheel: 4, engine: 1.0 };
const thirdObj = { price: 19.00, category: "clothes" };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: "VW", wheels: 4, engine: 1.0, color: "blue" };
const myPen = { name: "Bic", wheels: false, engine: false, color: "black" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `The key ${key.toString()} is present in object that has the value of ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Igor",
    age: 22,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'age'));
// error: console.log(showCharName(myChar, 'teste'))
// error: showCharName("mychar", 'teste')
// 6 - typeof type operator
const userName = "Igor";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'truck desc'
};
function showKm(km) {
    console.log(`Vehicle km: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar1 = 5;
const teste = "some text";
