/**
 *  lesFonctions
*/

// 
//tant que la fonction n'est pas appelé elle s'exécute pas

function bonjour(){
    alert("bonjour"); //le ; marque toujours la mise en exécution
}

// quand on veut l appler on met 
bonjour();
// () c'est la mise en exécution


function ditbonjour (prenom , nom){

    console.log(prenom + "" + nom);
    document.write(
        'Bonjour <strong>'
        + prenom
        +"  "
        + nom
        +'</strong>!'
    )
}

ditbonjour ("aurelie", "naba");


/*exercice
creer une fonction permettant d'effectuer l'addition de 2 nombres*/


console.clear();

function adittion (nb1 , nb2) {
    console.log( nb1 + nb2);
}

adittion (5 , 2);

//correction

// le consol.log dans la fonction c'est pour du debbugae vaut meiux creer une variable
//si je veux que le resultat sorte de ma FocusNavigationEventafin kil soit récuperer
// c'est le return qui dans ce cas qui dit ce qui sort de la fonction
//afin kil soit reeutilse
//une fontion ne sert à qu'une seule chose
//le return c'est lui qui dit ce qui ressort de la fonction

console.clear();

function addition (nb1 , nb2) {
    var resultat = nb1 + nb2;
    return resultat;
}

var resultatdemafonction = addition (12 , 3);
console.log(resultatdemafonction);

// pour simplifier on peut retirer la variable intermediaire

console.clear();

function addition (nb1 , nb2) { 
    return nb1 + nb2;
}

var resultatdemafonction = addition (12 , 3);
console.log('il y a ' + resultatdemafonction + ' billes');



console.clear();
function calcultva (ht , taux){
    var resultat = ht * taux;
    return resultat;
}

var cequecadonne = calcultva (10 , 1.2);
console.log ("le resultat est "+ cequecadonne);




console.clear();
function calcultva(ht , taux){
    var resultat = (ht * taux);
    return resultat ;
}

var cequecadonne = calcultva(10 , 1.2 );
console.log("Pour le montant de 10 euros ht; le montant TTC est "+ cequecadonne);


//dans de casil s'agit d'un taux par défaut si on veut la changer on peut la changer 
//dans les parametres
function calcultva( montantht, tauxtva = 8.5){
    return montantht + (montantht * (tauxtva/100));
}

var montanttc = calcultva (10);
var montanttc1 = calcultva (10 , 1.2);

console.log(montanttc);
console.log(montanttc1);

/**
 * creer une fonction permettant d'effectuer la conversion
 * d'un montant de euro et dollar.
 */

console.clear();
 function convertEuroToUsd(montanteuro , valeurdeconversionUsd = 1.1035){
     return montanteuro * valeurdeconversionUsd;
 }

 // vaut mieux declarer le prix éà dans une variable c mieux
 var a = convertEuroToUsd(20 , 1.1035);
 console.log("20€ après conversion en dollars donne " + a + "$");