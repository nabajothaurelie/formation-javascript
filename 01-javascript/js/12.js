// LES EVENEMENTS


/***
 * PERMETTE de déclencher une serie de  fonction d'evenements suite à une action de mon utilisateur
 * l'objectif etre en mesure de capturer ces evenements afin d'exécuter une fonction
 * 
 * 
 * 
 * les evenements de type MOUSE (donc la souris)
 * 
 * click : au clic de l'element,
 * dblclick : au double clic;
 * mouseenter : la souris passe au dessus d'un element;
 * mouseleave : la souris sort de l'element
 * mouseover : au passage de la souris;
 * 
 * les evenements : Keyboard (clavier)
 * 
 * keydown: quand la touche est enfoncé
 * keyup : quand on relache la touche du clavier
 * 
 * les evenements fenetre : WINDOW
 * 
 * SCROLL / DEFILEMENT.
 * RESIZE / REDIMENSIONNEMENT DE la fenetre
 * 
 *  les evenements  : FORM (formulaire)
 * change : pour les elements inpu select ou text area
 * submit : a l'envoi d'un formaulaire
 * input: pour capter saisi utilisateur
 * 
 * Pour attattache un evenement a un element ou autrement dit,
 * pour declarer un écouteur d'évements qui se chargera de déclencher une fonction,
 * je vais utliser la syntaxe suivante:
 * 
 * 
 * 
 */

 const p = document.getElementById("mon paragraphe");

 function changerLaCouleurEnRouge(){
     p.style.color ="red";
 }
 function changerLaCouleurEnNoir(){
    p.style.color ="black";
}

//p.addEventlistener("mouseover",changerLaCouleurEnRouge);
p.addEventListener("click",changerLaCouleurEnRouge);
p.addEventListener("mouseleave",changerLaCouleurEnNoir);