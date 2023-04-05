"use strict";
// 1 - ARRAYS []
let numbers = [1, 2, 3];
// numbers.push("test") ERROR
console.log(numbers[1]);
// numbers = "test" ERROR
const names = ["Igor", "Helena"];
// names.push(3) ERROR
// 2 - ARRAYS <>
const nums = [3, 2, 1];
nums.push(19);
console.log(nums);
console.log(nums[3]);
// 3 - any
const arr = [1, "test", true, [], { name: "name" }];
// 4 - parameter types
function sum(a, b) {
    console.log(a + b);
}
sum(1, 1);
// sum("1", "1") ERROR
// 5 - return types
function greeting(name) {
    return `Hello, ${name}`;
}
console.log(greeting("Matheus"));
// console.log(greeting(1)) ERROR
let str = greeting("Igor");
//let num:number = greeting("Igor")
// 6 - anonymous functions
setTimeout(() => {
    const sallary = 1000;
    // console.log(parseFloat(sallary)) error
    //console.log(sallary)
}, 2000);
// 7 - object types
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 290, y: 192 };
passCoordinates(objCoord);
// passCoordinates({name: 1, lastname: 2}) ERROR
// 8 - optional props
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c)
        console.log("C: " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - optional validation
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined)
        return (`Hello, ${firstname} ${lastname}, sup?`);
    return (`Hello, ${firstname}, sup?`);
}
console.log(advancedGreeting("Igor", "Souza"));
console.log(advancedGreeting("Igor"));
// 10 - onion types
function showBalance(balance) {
    console.log(`account deb: $${balance}`);
}
showBalance(1);
showBalance("1");
// console.log(showBalance(true)) ERROR
const arr2 = [1, "1"];
function showUserRoles(role) {
    if (typeof role === "boolean")
        return "User not aproved";
    return `role of user: ${role}`;
}
console.log(showUserRoles(false));
console.log(showBalance("adm"));
function showId(id) {
    console.log(`id: ${id}`);
}
showId(1);
showId("2");
function showpoints(obj) {
    console.log(`a: ${obj.a}, b: ${obj.b}, c: ${obj.c}`);
}
const pointsObj = {
    a: 1,
    b: 2,
    c: 3
};
showpoints(pointsObj);
// 15 - literal types
let test;
// test = 1 ERROR
test = "test";
console.log(test);
function showDirection(direction) {
    console.log(`the direction: ${direction}`);
}
showDirection("up");
showDirection("down");
// showDirection("left") EEROR
// 16 - NON null assertion operation
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - Bigint
let n;
// n =1 ERROR
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
console.log(symbolA == symbolB);
