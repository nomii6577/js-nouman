// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 12346657657867654564n
// Refernce (Non-premitive)

// Array, Objects, Functions

const heros = ["quaideAzam", "allamaIqbal", "ahmadKhan"];
let myObj = {
    name: "nouman",
    age: 22,
}
const myFunction = function () {
    console.log("Hello world");
}