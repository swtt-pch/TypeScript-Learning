"use strict";
// 1 -  void 
function withoutReturn() {
    console.log("This function doesn't return anything");
    //return 1;
}
withoutReturn();
// 2 - call back as argument
function greeting(name) {
    return `Hello, ${name}`;
}
function preGreeting(f, userName) {
    console.log("function:");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Igor");
preGreeting(greeting, "Mat");
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Igor" }, { age: 22 });
console.log(newObject);
// 4 - constraints 
function biggestNumber(a, b) {
    let biggestNumber;
    if (+a > +b) {
        biggestNumber = a;
    }
    else {
        biggestNumber = b;
    }
    return biggestNumber;
}
console.log(biggestNumber(2, 6));
console.log(biggestNumber("5", "6"));
console.log(biggestNumber("6", 2));
// 5 - specify arg type
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["ts", "js"]));
// 6 - optional parameters
function modernGreeting(name, greet) {
    if (greet) {
        return `Hello ${greet} ${name}`;
    }
    return `Hello ${name}`;
}
console.log(modernGreeting("Igor"));
console.log(modernGreeting("Igor", "Sr"));
// 7 - default parameter
function sumDefault(n, m = 10) {
    return n + m;
}
console.log(sumDefault(10));
console.log(sumDefault(10, 20));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x + " is a number");
    }
}
doSomething([1, 2, 3]);
doSomething(1);
// 9 - NEVER
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 6, 7, 8));
//console.log(sumAll("sajska"))
// 11 - destructuring com parametro
function showProductDetails({ name, price }) {
    return `Name of product: ${name}, price of product: ${price}`;
}
const shirt = { name: "shirts", price: 49.99 };
console.log(showProductDetails(shirt));
//console.log(showProductDetails({name: "test", age: 12}))
