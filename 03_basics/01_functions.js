
function sayMyName() {
    console.log("N");
    console.log("O");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");

}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumber(3, 6)
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    // if (username === undefined)
        if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Nouman"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "nouman",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})

const myNewArray = [100, 300, 500, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000, 3000, 5000, 7000]));