const readlineSync = require('readline-sync')

const userName = readlineSync.question('what is my name? ')

console.log(`My name is ${userName}`)