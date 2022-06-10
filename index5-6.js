// ====================== //
// ===== Exercice 5 ===== //
// ====================== //
/* Ecrire un algorithme qui vous demande d'entrer une suite de nombres (il vous les demande un par un, l'utilisateur termine la phase de saisie en entrant la valeur zéro) et qui vous affiche ensuite le plus petit nombre, le plus grand nombre, la somme et la moyenne de la suite. Sans utiliser methode .Math */

function demandeNombre() {
  let nb;
  let listeNb = [];

  while (nb != 0) {
    nb = parseInt(
      prompt("Entrez des nombres l'un après l'autre et terminez par 0")
    );

    if (nb == 0) {
      console.log("Voici les nombres que vous avez saisis : " + listeNb);
      let plusGrandNombre = -999999999;
      let plusPetitNombre = 9999999999;
      let longueur = listeNb.length;
      let moyenne = 0;
      let somme = 0;

      for (let i = 0; i < listeNb.length; i++) {
        somme += listeNb[i];
        moyenne = somme / listeNb.length;

        if (listeNb[i] < plusPetitNombre) {
          plusPetitNombre = listeNb[i];
        }

        if (listeNb[i] > plusGrandNombre) {
          plusGrandNombre = listeNb[i];
        }
      }

      console.log("Le plus grand nombre est : " + plusGrandNombre);
      console.log("Le plus petit nombre est : " + plusPetitNombre);
      console.log("La moyenne est : " + moyenne);
      console.log("La sommes des nombres est : " + somme);
    } else {
      listeNb.push(nb);
    }
  }
}

// ====================== //
// ===== Exercice 6 ===== //
// ====================== //
/* Faire un algorithme qui permet de compter le nombre de voyelles dans une phrase saisie par l'utilisateur. Le traitement sera fait à l'aide d'une fonction qui compte les voyelles. */

function chercheVoyelles() {
  let phrase = prompt("Ecrivez une phrase").toLowerCase();
  let nbVoyelle = 0;

  for (i = 0; i < phrase.length; i++) {
    if (
      phrase[i] == "a" ||
      phrase[i] == "e" ||
      phrase[i] == "i" ||
      phrase[i] == "o" ||
      phrase[i] == "u" ||
      phrase[i] == "y"
    )
      nbVoyelle = nbVoyelle + 1;
  }

  console.log("Il y a " + nbVoyelle + " voyelle(s) dans votre phrase");
}
