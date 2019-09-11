/**
 * 
 * 
 * le dom est une interface javascript pour html
 * grace au dom on est en mesure d'acceder ou modifier mon code html
 * et pour cela on passe par l'objet document
 * c'est le point d'entre vers mon contenu
 * chaque page chargé dans mon navigateur a un objet document
 */

 /**
  * comment puis je recupere les differents
  * informations de ma page html?
  * 
  * 
  */

  const bonjour = document.getElementById('bonjour');
  console.log (bonjour);

  const contenu = document.getElementsByClassName ("contenu");
  console.log (contenu);


  const p = document.getElementsByTagName ("p");
  console.log (p);

  console.log ( document.querySelector ("#bonjour");
  console.log ( document.querySelectorAll (".contenu"));
  console.log (document.querySelectorAll ("p"));

  // voir le queryselector dans mozilla







  /**
 * MANIPULATIONS DES CONTENUS
 */



function l (e) {
    console.log (e)
}
l("toto");

l=function(e) {
    console.log (e);
}

l = e => console.log(e); // la on a retire les paraentheses car il y a une seule instruction

const google = document.getElementById ('google');

//maintenant je souhaite acceder aux informations de ce lien
// 1- je veux connaitre le lien en lui mm via javascript dans ma console

// des qu'on a cible notre element on peut récuperer toute les données de element ciblé
// d'ou la cible avcec .href

l(google.href);

// pour retrouver le id on met
l(google.id);

// pour retrouver la balise
l(google.className);

// pour retrouver le texte dans la balise
l( google.textContent);

// et comment modifier le texte
l(google.textContent="mon lien google");


//ajouter UN ELEMENT DANS MA PAGE

// je cree un element span que je stocke dans ma constante
const span = document.createElement('span');

//je veux donner un id
span.id = "span"

//donner du texte
span.textContent = "mon joli texte en js";

//j'ai placé à l'interieur de la balise google span
google.appendChild (span);
// j ouvre le google pour mettre le span






