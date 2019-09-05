//alert("mon fichier js fonctionne")
// 2 slahs pour faire des commentaires sur une seule ligne
/* ici sur plusieurs lignes
raccourci:
- ctrl =:
- shitht = alt = A
*/
// 1- declarer une variable js;
var prenom;
// 2- affecter une valeurs à la variable prénom;
prenom="aurelie";
// 3- afficher la valeur dans la console;
console.log (prenom);



// LES TYPES DE VARIABLES

console.log( typeof prenom);
// ma variable contient une chaine de caractere

var age = 10;  // on a fait l'affectation directement
console.log( typeof age);

// variable de type float
var unedecimale = -2.984;
console.log( typeof unedecimale);
console.log( unedecimale);

// les booléens (vrai ou faux)
var unBooleen = false; //true
console.log( typeof unBooleen);

// les constantes
//on peut pas changer sa valeur en cours de la configuration du programme
const host="localhost";
const user = "root";
//la déclaration const me permet de creer une constante sa valeur ne pourra pas etre modifié
//par des réaffectation ultérieure

var unNombre="24";
//petite subtilité des qu'on met les crochets c'est une string
console.log( typeof unNombre);

unNombre= parseInt (unNombre); //parseint c'est avec les nombres entiers qu'on appellent un integer ou int apres conversion de la string
console.log (unNombre);
console.log (typeof unNombre);

unNombre= "2.6544";
unNombre= parseFloat (unNombre);//parseFLOAT POUR OBTENIR UN NOMBRE A virgule apres la conversion de la string
console.log (unNombre);
console.log (typeof unNombre);


// LA PORTEE DES VARIABLES
/* LES VARIABLES declarées directement à la racine du fichier .js  sont appleés variables globales
ca veut sire quelle sont disponibles dans l'ensemble de notre fichier .js y compris dans les fonctions
les déclarée a l'interieur d'une fonction sont appelés: variables locales.
elles sont disponibles dans le scope*/
