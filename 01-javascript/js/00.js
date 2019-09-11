

 var prenom = window.prompt ("Quel est ton prénom?");
 
 var question1 = alert ("Bonjour "
                         + prenom
                         + " quel age as tu?");
 
 var answerAge = window.prompt ("quel est votre age");
 
 function ageUser(answerAge , anneeActuelle){
         return (anneeActuelle - answerAge);
 }
 
 
 var resultatAgeUser = ageUser (answerAge , 2019);
 
 var reponse = alert ('Tu es donc né en '
                 + resultatAgeUser
                 + " .");
 
                 document.write(" Bonjour  " 
                                 + prenom
                                 + " , tu as "
                                 + answerAge 
                                 + " ans !");
 console.log();
