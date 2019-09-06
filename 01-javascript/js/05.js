/**
 *  incrementation
 */

// 

var nb1 = 1;
nb1 = nb1 + 1;
//ecriture simpliqfiée
nb1++;
//la meme que nb1 = nb1 + 1

nb1 = 1;
nb1 = nb1 + 2;
//ecriture simplifiée
nb1 += 2; //j'ajoute +2 a nb1 identique a nb1 = nb1 + 2;
nb1 += 5; //j'ajoute +5 a nb1 identique a nb1 = nb1 + 5;

/**
 *  decrementation
 */

 var nb1 = 1;
 nb1 = nb1 + 1;
 //ecriture simpliqfiée
nb1--;

nb1 -= 2; //j'ajoute +2 a nb1 identique a nb1 = nb1 - 2;
nb1 -= 5; //j'ajoute +5 a nb1 identique a nb1 = nb1 -5;

console.clear();
//subtilité
nb1 = 0 ;
console.log(nb1++);
//ca donnera 0 car dans javascrpt le principe se fait par ordre
// 1 il affche le console.log, 2 il affaiche la valeur de nb1, 3 ilfait l'operation 
//l'incrementation qui est faite n'a pas lieu car la donne est deja affiche donc
//on ne revient pas dessus ca sera 0

//il faut pour cela affiché une seconde ligne pour affcihe le resultat de nb1 dans une console.log
console.log(nb1);
//tout se joue sur la position du plus pplus

nb1= 0;
console.log ( ++nb1); //ca donnera 1 car l'incrematation est traité avant dou le +1





