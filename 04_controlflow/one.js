// if
const isUserLoggedIn = true
const temeprature = 40
// if (temeprature < 50) {
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User powe: ${power}`);
// }

// console.log(`User powe: ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow to buy courses");
}
