/*var myArray = ["test", "bus", "text"];
console.log(myArray);

var listeContacts = [
    {
        nom: "caza",
        prenom: "aurelie",
        adress :{
            rue: "rue de la ferme",
            quartier: "dugazon",
            codepostal: "97139"
        },
        tel: "0690 12 34 56",
        description : [
            {
                mois: "octobre",
                economie:100,
                valeurs: "euros"
            },
            {
                mois: "décembre",
                economie:50,
                valeurs: "devises"
            }
        ]
    },


    {
        nom: "bus",
        prenom: "ama",
        adress :{
            rue: "rue de la fois",
            quartier: "morne a l eau",
            codepostal: "97139"
        },
        tel: "0690 12 34 56",
        description : [
            {
                mois: "octobre",
                economie:100,
                valeurs: "bus"
            },
            {
                mois: "décembre",
                economie:500,
                valeurs: "euros"
            }
        ]
    }
];


console.clear();
var monDernierelement = listeContacts.pop();

console.log (listeContacts);
console.clear();

listeContacts.push (test =["1","2",3]);
console.log(listeContacts);


var vosPrenoms = [
    "nia",
    "catherine",
    "gaelle",
    "cindy",
    "astrid"
];
//le fait d'avoir mit les crochets permet de créer une liste directement, sur le dernier mot ne pas mettre la virgule
console.log( vosPrenoms );

console.clear();
var unNombre = 10;
var unstring = unNombre.toString();
console.log (unstring);
console.log (typeof unstring);


console.clear();
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
                    
*/

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



for (let i=0 ; i <= baseDeDonnees.length ; i++) {
      
    let question1 = alert (prompt("quel est votre email"));
    let useranswer1 = question1;
    let question2 = alert (prompt("quel est votre nom"));
    let useranswer2 = question2;


    if (useranswer1 == baseDeDonnees[i].email  && useranswer2 == baseDeDonnees[i].nom ) 
    {
        document.write ("bienvenue cher adhérent" + baseDeDonnees.nom
        )}
    elif   (useranswer1 != baseDeDonnees[i].email  && useranswer2 != baseDeDonnees[i].nom )   
    { 
        alert ("erreur, vous n'etes pas répéertorié")
    }
    break;
}