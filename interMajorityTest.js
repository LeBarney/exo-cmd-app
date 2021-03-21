const intermajorityTest = (ageLimite) => {

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
if (age >= process.argv[0]) {
  console.log(` vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé , vous êtes mineur, vous ne pouvez pas voter`)
}
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const ageLimite = Number(process.argv[2])
intermajorityTest(ageLimite)