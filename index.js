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
