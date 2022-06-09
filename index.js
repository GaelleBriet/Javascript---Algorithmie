// ===== Exercice 1 ===== //
/* Écrire un algorithme permettant de faire la somme des N premiers
entiers. La fonction demandée prend en entrée un nombre entier, N, et
renvoie un autre nombre entier, la somme demandée.*/
let somme = 0;

const sommeEntiers = (number) => {
  for (i = 0; i <= number; i++) {
    somme += i;
  }
  console.log(somme);
  somme = 0;
};

function sommeEntiers2(number) {
  somme = (number * (number + 1)) / 2;
  console.log(somme);
  somme = 0;
}

// ===== Exercice 2 ===== //
/* Ecrire un algorithme qui vous demande d'entrer une phrase et qui affiche cette phrase à l’envers.*/

// split() place chaque caractère de la chaîne en un tableau
// reverse() inverse les elements d'un tableau
// join() rejoint les caractères

const inversePhrase = (inv) => {
  return inv.split("").reverse().join("");
};

let phrase = inversePhrase("je suis inversé");
console.log(phrase);

//---
let phrase2 = "Je suis une phrase";
let reverse = phrase2.split("").reverse().join("");
console.log(reverse);

//----
function inverseMot(str) {
  str = str.split("").reverse().join("");
  return str;
}

str = "je vais etre à l'envers";
console.log(inverseMot(str));

//---
// boucle for
function reversion(s) {
  let stringInverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    stringInverse += s[i];
  }
  return stringInverse;
}
console.log(reversion("moi aussi"));
