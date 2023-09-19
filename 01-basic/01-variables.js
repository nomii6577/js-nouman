const accountId = 14453
let accountEmail = "nomi@google.com"
var accountPassword = "12345"
accountCity = "Rawalpindi"

accountEmail = "nomi@nomi.com"
accountPassword = "325"
accountCity = "Islamabad"

// accountId = 2 //not allowed
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])