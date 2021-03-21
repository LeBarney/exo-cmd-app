const readLineSync = require('readline-sync')

// Question
let age;
let checkAge = false;

//TODO : check isNan
while(!checkAge)
{
let ageString = readLineSync.question('votre âge?')
age = Number(ageString);
if (Number.isInteger(age) && age > 0 )
    {
      checkAge = true;
    }
  else
      {
        console.log('Veuillez donner un âge réel')
      } 
    }
if (age >= 18) {
  console.log(` vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé , vous êtes mineur, vous ne pouvez pas voter`)
}