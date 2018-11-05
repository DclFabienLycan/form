// Déclaration des variables
// var nbr 1 = la saisie dans le cadre1;
var nbr1 = document.getElementById("toto");
// var nbr 2 = la saisie dans le cadre3;
var nbr2 = document.getElementById("toto2");


// addEventListener en click sur le bouton calculer;
var calculs = document.getElementById("Calculer");
calculs.addEventListener ("click", 
function () {
    var choix = document.getElementById("selected");
    var resultat = document.getElementById("toto3");
    // var nbr 1;
    var nombre1Entré = parseInt(nbr1.value);
    console.log(nombre1Entré);
    // var nbr 2;
    var nombre2Entré = parseInt(nbr2.value);
    console.log(nombre2Entré);
    // var choix opérateur;
    var calcul;
    // Si l'opérateur est +, alors on additionne nbr 1 et 2;
    if (choix.value == "+") {
        calcul = nombre1Entré + nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix.value == "*") {
        // Et si l'opérateur est *, alors on multiplie nbr1 et 2;
        calcul = nombre1Entré * nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix.value == "-") {
        // Et si l'opérateur est -, alors on soustrait nbr 1 et 2;
        calcul = nombre1Entré - nombre2Entré;
        console.log(calcul);
        console.log(choix);
    } else if (choix.value == "/") {
        // Et si l'opérateur est /, alors on divise nbr1 et 2;
        calcul = nombre1Entré / nombre2Entré;
        console.log(calcul);
        console.log(choix);
    }
    resultat.value= calcul;
    console.log(resultat.value);
}
);