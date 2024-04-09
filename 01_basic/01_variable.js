const accountId = 144553
let accountEmail ="example123@gmail.com"
var accountPassword = "12345"
accountCity = "Uttar pradesh"

// accountId =2 // not allowed

accountEmail ="pm@gmail.com"
accountPassword ="1234567"
accountCity ="Delhi"
let accountState; // Without value the output is undefined


/*console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
*/
// Use this method
// easy to understand

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*Prefer not to use var 
beacause of issue in block scope and functional scope*/

