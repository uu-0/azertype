//affiche le score du joueur par rapport à son nb de questions
function printScore(score, questionsNb){
    console.log('votre score est de ' + score + ' sur ' + questionsNb)
}


//cpermet de choisir le mode de jeu
function choiceGameMode(){
    choix = prompt("voulez-vous jouer avec des 'mots' ou des 'phrases' ?");
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("voulez-vous jouer avec des 'mots' ou des 'phrases' ?");
    }
    return choix;
}


//lance la boucle de jeu
function startLoop(propositionsListe){
    let score = 0;
    for (let i = 0; i < propositionsListe.length; i++) {
        let motUtilisateur = prompt("entrez le mot : " + propositionsListe[i]);
        if (motUtilisateur === propositionsListe[i]) {
            score++;
        }
    }
    return score;
}

//lance le jeu
function startGame(){
    let choix = choiceGameMode();
    let score = 0;
    let questionsNb = 0;

    if (choix === 'mots'){
        score = startLoop(listeMots);
        questionsNb = listeMots.length;
    }else{
        score = startLoop(listePhrases);
        questionsNb = listePhrases.length;
    }
    printScore(score, questionsNb);
}