const accountId=31651
let accEmail= "bilal5459js.com"
var accPassword="1233456"

accountCity="Kolkata"  // we can declare like this also but we should avoid this practice

// accountId=122121 --> Cant change const value
console.log(accountId);

accEmail="abhbc16546.com"
accPassword="13216546"
accountCity="Asansol"

/*
Prefer not to use "var" 
bcoz of issue in the block scope and functional scope

*/

let accountState;

console.table([accountId,accEmail,accPassword,accountCity,accountState]);