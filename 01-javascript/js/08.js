/**
 *    les condittions
 */


 /** var majoriteLegalFr = 18 ;

 if (19 >= majoriteLegalFr) {
     alert ("bienvenue");
     // ca va fonctionner si inferieur rien ne sera editer

 }
 else if (18 == majoriteLegalFr) {
    alert ("c'est un peu juste");
    //autant de else if que je veux et il n'est pas obligatoire
 }

 else {
     alert ("va voir sur google... si j'y suis")
     // le esle n'est pas obligatoire
 }
 */

 /**
  * crer une fonction qui va verifier l'age d'un visiteur (prompt).
  * S il a la majorité légale, alors je lui soyuaite la bienvenu
  * sinon je fais une redirection sur google apres lui avoir expliqué le souci
  */
// console.clear();
// /*

    
//     var answerAge = parseInt(prompt ("quel est votre age"));
    
//     var majoriteLegalFr = 18;

//    if(answerAge >= majoriteLegalFr) 
//        {
//            alert("vous etes le bienvenu");
//        }
//        else{
//            alert("vous allez etre redirigé");
//            var adress = window.location.href ;
//            window.location.href = "https://www.google.fr/"}

// }
// age();
//  */
// /**
//  * 1- creer une fonction permattant de vérifier la majorite
//  * 2- je demande à l'utilisateur
//  * 3- verification de son age
//  * 4- rdirection en cas d echec
//  * 
//  * 
//  */
// console.clear();
//  const majoriteLegalFr = 18;
//  function monUtilisateurEstMajeur(age) {
//      if( age >= 18) {
//          return true;
//      }
//      else {
//          return false;
//      }
//  }
//  const ageSaisiParMonUtilisateur = parseInt(prompt("bonjour, quel age avez-vous"));

// if (monUtilisateurEstMajeur(ageSaisiParMonUtilisateur)){
//     alert ("Bienvenue sur mon site");
// }

// else {
//     alert ("vous devez etre majeur");
//     document.location.href = "https://google.fr";
// }

/**
 * 
 *          les operateurs de comparaison
 * 
 * 
 * l opérateur de comparason "==" signifie egal à
 * il permet de verifier que 2 variables sont identiques
 * 
 * l'oparateur de comparaison "===" strictement egal en type et valeur
 * il va comparer la valeur , le type.
 * if( 14 == "14"){} = True
 * if( 14 === "14"){} = True
 * if( 14 === 14 ){} = True
 */

 // operateur "!=" different de
 // "!==" strictement different de

 // if ( 12 != 14){} = True
 // if ( 12 !== "12"){} = True (le type differe donc c bien different)



 /* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

var request = prompt("bonjour, saissisez votre email", "<@gmail.com>");

if(request == email) {
    var request2 = prompt("bonjour, saissisez votre mot de passe");


        if (request2 === mdp) { 
            alert ("bienvenu dans votre espace")
            
        }  
        else{
            alert ("vous n'avez pas de droit d'accès")
        }    
}
else{
    alert ("vous n'avez pas de droit d'accès")
}




/* ----------------------------------------------------------------------
    EXERCICE : http://sharemycode.fr/consigne
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.

// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

// -- Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");



