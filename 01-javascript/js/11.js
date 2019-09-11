


/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

//ajouter le champ input dans le body
document.body.appendChild(input);

//permet d'affcicher la valeur du champ input

function afficherlsaisie(){
    alert ( input.value);
}

//permet de déclarer les ecouterus d'evenement sur le champ input
input.addeventListener ("input" , afficherlsaisie);


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

const h1 = document.createElement ("h1");
const a = document.createElement ("a");
a.textContent = "les apprenantes sont crevées...";
a.href="#";
h1.appendChild(a);
document.body.appendChild(h1);

a.style.color = "red";
a.style.textDecoration = "none";