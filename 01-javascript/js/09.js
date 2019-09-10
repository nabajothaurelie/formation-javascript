// // les boucles

// //le premier ; veut dire
// // le deuxieme veut alors
// //for ( let i= 0 ; i<=10 ; i++){
//  //   document.write('<p>instruction exécutée" "<strong>'  + i + '</strong></p>');
// //}

// //document.write("<hr>");


// //let j=0 ;
// //tant que j est inferieur
// //while (j <= 10){
//   //  document.write('<p>instruction exécutée" "<strong>'  + j + '</strong></p>');
// //    j++ ; //on le met ici c le sens de lecteur de javascript car sinon il aurait a jouter deJa 1
// //}

// //document.write("<hr>");


// //EXERCICES

// //CONSIGNE/ grace a une boucle for ou autre affciher la liste des prenoms
// //dans votre page ou console.

// const nom = ['Jean','marc','mathieu','Paul','luc','hugo','jacques'];

// for ( let index = 0 ; index <= 6 ; index++){
//         console.log( nom [ index ]);
// }
// console.clear();

// 

// for (let index = 0 ; index <= 10){
//     console.log (nombre(+index));


// // // declarer une variable somme soit let:resultat
// const nombre = [1,2,3,4,5,6,7,8];
// let resultat = 0;
// // creer une boucle pour l'adittion des nombre
// // pour i = 0 tant que i est inferieur au nobre d'element dans le tableau nombre
// //alors je continnue d'incrémeter index de 1
// for (let index = 0 ; index < nombre.length ; index++ ){
//     // on sait que i prendra succssessivement les valeurs de 0 à 10
//     //comment additionner ses valeurs
//     resultat = (resultat + nombre[index]);
// }
// console.log( resultat);


/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contetient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/




//LA CORRECTION

nom = [ 'stalone','Cruiz','clea']

for (let i= 0; i < nom.length ; i++){
    console.log(  "Le numero"+ i +" est"  + nom[i]);
    
}





nom = [ 'stalone','Cruiz','clea']
tableau = [ 'premier','deuxieme','troisieme']

for (let i= 0; i < nom.length ; i++){
    console.log(  "Le" + tableau[i] +" est"  + nom[i]);
    
}



/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/


var mois = (new Date).getMonth();
console.log (mois);
moisLettre= ['janvier','fevrier','mars','avril','mai','juin','juiillet',"aout","septembre","octobre",]
console.log (moisLettre);
alert ( moisLettre [mois]);