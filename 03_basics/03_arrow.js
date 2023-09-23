const user = {
    username: "Nouman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Nouman"
//     console.log(this);
// }

// chai()


// const chai = function () {
//     let username = "Nouman"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Nouman"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Nouman"})

console.log(addTwo(3,4))

const myArray = [2, 3, 4]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())