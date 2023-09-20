const name = "nouman"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string

const gameName = new String('nouman-ns')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   nouman    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nouman.com/nouman%20shafqat"
console.log(url.replace('%20', '-'));