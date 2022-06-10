// ====================== //
// ===== Exercice 7 ===== //
// ====================== //
/* Faire un algorithme qui permet de calculer la moyenne des notes des étudiants d'une classe. Le nombre d'étudiants n'est pas connu d'avance. On saisi donc des notes et on mets -1 pour terminer la saisie. Les notes doivent être comprises entre 0 et 20. Utilisez une fonction qui prend une liste de notes et qui retourne la moyenne. */

function calculMoyenneClasse() {
  let tableauNote = [];
  let note;
  let somme = 0;
  let moyenne = 0;
  let i = 0;

  while (note != -1) {
    note = parseInt(
      prompt("Entrer des notes entre 0 et 20 et terminer la saisie par -1")
    );

    if (note < -1 || note > 20) {
      console.log("Entrez une note entre 0 et 20");
      note = parseInt(
        prompt("Entrer des notes entre 0 et 20 et terminer la saisie par -1")
      );
    }

    if (note >= 0 && note <= 20) {
      tableauNote[i] = note;
      somme = somme + tableauNote[i];
      moyenne = somme / tableauNote.length;
      i++;
      note = parseInt(
        prompt("Entrer des notes entre 0 et 20 et terminer la saisie par -1")
      );
    }

    if (note == -1) {
      console.log("La somme des notes est : " + somme);
      console.log("La moyenne de la classe est : " + moyenne);
    }
  }
}
