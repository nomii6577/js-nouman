// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nouman",
    "full name": "Nouman Shafqat",
    [mySym]: "mykey1",
    age: 18,
    location: "Islamabad",
    email: "nouman@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "nouman@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "nouman@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());