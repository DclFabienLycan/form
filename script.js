// Déclaration des variables
// var nbr 1 = la saisie dans le cadre1;
var nbr1 = document.getElementById("toto");
// var nbr 2 = la saisie dans le cadre3;
var nbr2 = document.getElementById("toto2");
// var choix = opérateur de la liste select;
var addition = document.getElementById("add");
var multiplication = document.getElementById("mult");
var soustraction = document.getElementById("sous");
var division = document.getElementById("div");
// var resultat = affichage des opérations dans le cadre5;
// var resultat = document.getElementById("toto3");

// Function
function Choix () {
    var choix = document.getElementById("selected");
    index = choix.selectedIndex;
    console.log(choix.options[ index ].value);
    if (choix.options[ index ].value = "+") {
        choix = addition;
        console.log(choix.value);
    } else if (choix.options[ index ].value = "-") {
        choix = soustraction;
        console.log(choix.value);
    }
}
Choix();

// addEventListener en click sur le bouton calculer;
var calculs = document.getElementById("Calculer");
calculs.addEventListener ("click", 
function () {
    // var addition = document.getElementById("add");
    // var multiplication = document.getElementById("mult");
    // var soustraction = document.getElementById("sous");
    // var division = document.getElementById("div");
    var resultat = document.getElementById("toto3");
    // var nbr 1;
    var nombre1Entré = parseInt(nbr1.value);
    console.log(nombre1Entré);
    // var nbr 2;
    var nombre2Entré = parseInt(nbr2.value);
    console.log(nombre2Entré);
    // var choix opérateur;
    var calcul = parseInt(resultat.value);
    // Si l'opérateur est +, alors on additionne nbr 1 et 2;
    if (choix = addition) {
        calcul = nombre1Entré + nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix = multiplication) {
        // Et si l'opérateur est *, alors on multiplie nbr1 et 2;
        calcul = nombre1Entré * nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix = soustraction) {
        // Et si l'opérateur est -, alors on soustrait nbr 1 et 2;
        calcul = nombre1Entré - nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix = division) {
        // Et si l'opérateur est /, alors on divise nbr1 et 2;
        calcul = nombre1Entré / nombre2Entré;
        console.log(calcul);
        console.log(choix);
    }
}
);

