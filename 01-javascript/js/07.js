
/**
 * Votre mission, que vous devez accepter !
Réaliser une fonction permettant à un internaute de :
- Saisir son Prénom dans un Prompt
- Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
- Saisir son Age
- Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
- Afficher ensuite un récapitulatif dans la page.
Bonjour [PRENOM], tu as [AGE] ! 
 */


 // il faut décanter les étapes.

 //
//1- creer une fonction
function presentation (){
// 2- on demande a l'utilisateur son prenom
    var prenom = prompt ("quel est votre prenom", "<votre prenom>");
    console.log(prenom);
// 3- lui demander ensuite son age
    var age = parseInt (prompt ("bonjour " + prenom + " quel est votre age"));
    console.log(age);
    console.log (typeof age);
// 4- calcul année de naissance
    var objetDate = new Date();
    var dateDeNaissance = objetDate.getFullYear() - age;
    alert ("tu es donc né en "+ dateDeNaissance);
// 5- afficher le récapitulatif
document.write("Bonjour "+ prenom +" "+ age);
}

presentation();






