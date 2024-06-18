const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];

let score = 0;

//user choice
let choix = prompt("voulez-vous jouer avec des 'mots' ou des 'phrases' ?");
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("voulez-vous jouer avec des 'mots' ou des 'phrases' ?");
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("entrez le mot : " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            console.log("gg");
            score++;
        } else{
            console.log("vous avez fait une erreur");
        }
    }
    console.log("votre score est de " + score + " sur " + listeMots.length);
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt("entrez la phrase : " + listePhrases[i]);
        if (phraseUtilisateur === listePhrases[i]) {
            console.log("gg");
            score++;
        }else{
            console.log("vous avez fait une erreur");
        }
    }
    console.log("votre score est de " + score + " sur " + listePhrases.length);
}
