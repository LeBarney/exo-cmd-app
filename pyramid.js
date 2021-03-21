const readlineSync = require('readline-sync')
let basePyramideDone = false;
let nbStars;
let motifChoisi = false;
let motif;

while(!basePyramideDone)
{

  let nbStarsString = readlineSync.question('base pyramide?')
  nbStars = Number(nbStarsString)
  if (Number.isInteger(nbStars) && nbStars > 0 )
    {
      basePyramideDone = true;
    }
  else
      {
        console.log('Veuillez donner un nombre entier positif')
      } 
}

while(!motifChoisi)
{

  motif = readlineSync.question('motif de la pyramide? ')
 
  if (motif.length === 1)
    {
      motifChoisi = true;
    }
  else
      {
        console.log('Veuillez choisir un caractère unique')
      } 
}

for (let i = 1; i <= nbStars; i += 1) 
{
    console.log(motif.repeat(i))
}
