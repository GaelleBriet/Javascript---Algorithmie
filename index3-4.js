// ====================== //
// ===== Exercice 3 ===== //
// ====================== //
/* Ecrire un algorithme qui vous demande d'entrer une suite de nombres (il vous les demande un par un, l'utilisateur termine la phase de saisie en entrant la valeur zéro) et qui vous affiche ensuite le plus petit nombre, le plus grand nombre, la somme et la moyenne de la suite. */

function demandeNombre() {
  let nbSaisis;
  let listeNombres = [];
  while (nbSaisis != 0) {
    nbSaisis = parseInt(
      prompt("Entrez des nombres l'un après l'autre et terminez par 0")
    );
    if (nbSaisis == 0) {
      console.log("Voici les nombres que vous avez saisis : " + listeNombres);
      let plusGrandNombre = Math.max(...listeNombres);
      let plusPetitNombre = Math.min(...listeNombres);
      let longueur = listeNombres.length;
      let moyenne = 0;
      let somme = 0;

      for (let i = 0; i < longueur; i++) {
        somme += listeNombres[i];
      }

      for (let nombre of listeNombres) {
        moyenne += nombre / longueur;
      }

      console.log("Le plus grand nombre est : " + plusGrandNombre);
      console.log("Le plus petit nombre est : " + plusPetitNombre);
      console.log("La moyenne est : " + moyenne);
      console.log("La sommes des nombres est : " + somme);
    } else {
      listeNombres.push(nbSaisis);
    }
  }
}

// ====================== //
// ===== Exercice 4 ===== //
// ====================== //
/* Écrire un algorithme qui permet de recherche un élément dans un tableau d'entiers. Le tableau est entré dans l'algo. On demande de saisir un nombre et l'algo renvoie 0 si le nombre n'est pas dans le tableau et renvoie sa position si le nombre est dans le tableau. */
function trouveNombre() {
  const tableau = [20, 14, 18, 4, 0, 6, 19, 11];
  let saisirNombre = parseInt(prompt("Entrez un nombre"));
  let result = 0;

  for (let i = 0; i < tableau.length; i++) {
    if (saisirNombre === tableau[i]) {
      result = 1;
    }
  }

  if (result == 1) {
    console.log("Le nombre " + saisirNombre + " est dans le tableau.");
  } else if (result == 0) {
    console.log("Le nombre " + saisirNombre + " n'est pas dans le tableau.");
  }
}

function trouveNombre2(nbListe) {
  let nb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (nb.indexOf(nbListe) > -1) {
    return true;
  } else {
    return false;
  }
}
