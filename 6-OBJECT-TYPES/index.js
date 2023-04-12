"use strict";
function showProductDetails(product) {
    console.log(`Name: ${product.name} and it price: ${product.price}`);
    if (product.isAvalable) {
        console.log("Product is avaliable");
    }
}
const shirt = {
    name: "Shirt",
    price: 19.99,
    isAvalable: true
};
showProductDetails(shirt);
showProductDetails({ name: "shoes", price: 20.00, isAvalable: false });
function showUserDetails(user) {
    console.log(`User email: ${user.email}`);
    if (user.role) {
        console.log(`Role of user: ${user.role}`);
    }
}
const user1 = { email: "user1@user1.com", role: "adm" };
const user2 = { email: "user2@user2.com" };
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const igor = {
    name: "Igor",
    age: 22
};
console.log(igor);
const deku = {
    name: "Deku",
    age: 18,
    superpowers: ["united states of smash"]
};
console.log(deku);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - readonly array
let myArray = ["apple", "orange", "banana"];
// error: myArray[3] = "pen"
console.log(myArray);
myArray.forEach((i) => {
    console.log("fruit: " + i);
});
myArray = myArray.map((item) => {
    return `Fruit: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Igor", 22];
anotherUser[0] = "carlos";
// error: anotherUser[1] = "2"
console.log(anotherUser);
// 9 - tuplas with readonly
function showNumbers(numbers) {
    // error: numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
