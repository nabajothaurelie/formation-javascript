/*A partir du tableau "baseDeDonnees" fourni, vous devez mettre en place un système d'authentification.
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE,
et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue
avec son nom et prénom (document.write);

En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
-- */
console.clear();

const baseDeDonnees = [
{'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
{'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
{'prenom':'Nathanael','nom':'ORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

let useranswer1 = prompt("quel est votre email");
let useranswer2 = prompt("quel est votre mdp");

function nomCompte (useranswer1 , baseDeDonnees) {

        ( useranswer1 == baseDeDonnees.length)
        return baseDeDonnees.nom   
}
nomCompte (useranswer1 , baseDeDonnees);


for (let i=0 ; i <= baseDeDonnees.length ; i++) {
      
    if (useranswer1 == baseDeDonnees[i].email  && useranswer2 == baseDeDonnees[i].mdp ) 
    {
        document.write ("bienvenue cher adhérent : " + baseDeDonnees[i].nom); break }
        
    else  
    { 
        alert ("erreur, vous n'etes pas répéertorié")
    }
}


