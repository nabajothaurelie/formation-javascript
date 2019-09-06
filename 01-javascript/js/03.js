/* CONCATENATION */

var debutdephrase = "aujourd'hui ";
var datedujour = new Date();
var suiteDePhrase = ", sont presentes: ";
var nbApprenantes = 14 ;
var finDePhrase = "apprenantes.<br>";


/* nous voulons grace à la concatenation afficher
* une le tout en une phrase sur notre page*/

 document.write(
     debutdephrase  + datedujour.getDate()
                    + "/"
                    + (datedujour.getMonth() + 1)
                    + "/"
                    + datedujour.getUTCFullYear()
                    + suiteDePhrase
                    + nbApprenantes
                    + finDePhrase
                
 );

 /**
  * ici la variable var datedujour = new Date();
  * grace au point"." je peux utliser ces fonstions.
  */


