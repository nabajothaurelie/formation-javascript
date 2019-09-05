// declarer un tableau indexé
var monTableau = [];
var myArray = new Array; //autre notation mais identique
// dans la mm variable je peux stocké plusiseur valeurs mais qui elle seront indexées

monTableau[0] = "hugo";
monTableau[1] = "rosemael";
monTableau[2] = "Aurelie";
monTableau[3] = "Elodie";

console.log( monTableau );
console.log( monTableau[0] );

var vosPrenoms = [
    "nia",
    "catherine",
    "gaelle",
    "cindy",
    "astrid"
]
//le fait d'avoir mit les crochets permet de créer une liste directement, sur le dernier mot ne pas mettre la virgule
console.log( vosPrenoms );


//créer un objet en javascript; on utilise les accolades pour le desinger

var coordonee = {
// on d'un cote les proprietes  : les valeurs
    prenom : "aurelie" ,
    nom :  "nabajoth" ,
    age : 10 ,
    tel : "4545456486"
}


console.log(coordonee["prenom"]); //on met les crochets pour afficher la console mm chose que pour un tableau
console.log(coordonee.age); //ecriture à privilégier avec le point  



var annuairedesapprenantes = [ //un tableaux a deux dimensions donc deux valeurs stockés--tableau imbriqué
    ["nia","vitalis"],  //0
    ["angelique", "jean-noel"] //1
]
console.log(annuairedesapprenantes[0][0] );
console.log(annuairedesapprenantes[1][0] );
console.log(annuairedesapprenantes );


annuairedesapprenantes = [
    {
     nom : "labuthie",
     prenom : "laureen"   
    },
    {
        nom : "Anthony",
        prenom : "lena"   
    },
    {
        nom : "kataryna",
        prenom : "lucina"   
    }

]

console.clear();
console.log(annuairedesapprenantes);
console.log(annuairedesapprenantes [1]["nom"]);
console.log(annuairedesapprenantes [0].nom);


var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.clear();
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...



var recettes = [
        {
            nom: "gateau au yaourt",
            categorie: "dessert",
            souscategorie: "gateaux",
            cout:"abordable",
            nbpersonnes: 8,
            specialite: "italien",
            cuisson: {
                preparation: 30,
                preparationminute: "minutes",
                prechauffage: "termostat 220°",
                repos:120,
                total: 150,
                totalUnite: "minutes",
                ustensiles: [
                    "batteur",
                    "mixeur",
                    "four"
                ]
            },
            ingredient : [
                {
                    nom: "sucre",
                    quantite: 50 ,
                    unite: "g"
                },
                {
                    nom: "yaourt",
                    quantite: 50 ,
                    unite: "g"
                },
                {
                    nom: "sel",
                    quantite: 50 ,
                    unite: "g"
                }
            ],
            instructions: [
                {
                    description:"faire tel ou tel chose",
                    photourl:"https://ideesrecettes.net/wp-content/uploads/2016/11/Recette-Gateau-Nature-Moelleux.jpg"
                }
            ]
        }

]
console.clear();
console.log(recettes);



//corrigé


/* -----------------------------------
            ~ ~ CONSIGNE ~ ~
    
        Réaliser une structure JSON
        permettant de stocker des
        recettes de cuisine.
----------------------------------- */
/*
var recette = [
    {
        nom: 'Tiramisu',
        categorie: 'Desserts',
        sousCategorie: 'Gateaux',
        difficulte: 'Facile',
        cout: 'Abordable',
        nbPersonnes: 8,
        specialite: 'Italien',
        cuisson: {
            preparation: 30,
            preparationUnite: 'minutes',
            duree: '',
            temperature: '',
            repos: 120,
            reposUnite: 'minutes',
            total: 150,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Sucre',
                quantite: 80,
                unite: 'g'
            },
            {
                nom: 'Mascarpone',
                quantite: 250,
                unite: 'g'
            },
            {
                nom: 'Café Expresso',
                quantite: 15,
                unite: 'cl'
            },
        ],
        ustensiles: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
           {
               description: 'Séparer les blancs des jaunes...',
               photoUrl: 'https://recettes.fr/monetape.jpg'
           },
           {
                description: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
            {
                description: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
        ]
    },
    {
        nom: 'Blaf',
        categorie: 'Plats',
        sousCategorie: 'Poissons',
        difficulte: 'Moyen',
        cout: 'Abordable',
        nbPersonnes: 4,
        specialite: 'Antillaise',
        cuisson: {
            preparation: 45,
            preparationUnite: 'minutes',
            duree: '30min',
            temperature: '',
            repos: 0,
            reposUnite: 'minutes',
            total: 75,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Poisson',
                quantite: 4,
                unite: ''
            },
            {
                nom: 'Figue',
                quantite: 12,
                unite: ''
            }
        ]
    } */
        
        //nota bene: un objet respecte toujours le format propriété:valeur   ou la valeur peut etre de px types
        /* unBooleen: true,
           unNombre: 18,
           unString: "Je suis en string",
           unObjet: {
               propriete: valeur,
           }
           unTableau: [
               "matheieu","marc","Luc"
           ]
           */


         //ajouter un élément dans un  tabeau
         console.clear();


         var couleurs = ["rouge","jaune", "vert"];
         console.log(couleurs);

         couleurs.push("bleu");
         console.log (couleurs);

          /* on peut pusher un tableu un obejt etc... tout ce qu'on veut
           */

           couleurs.push(["gris","jaune"]);
           couleurs.push({couleur:"violetparme"});
           console.log (couleurs);

           couleurs.unshift("orange"); //aujour au début
           console.log (couleurs);

             //enlever le dernier élément dans un  tabeau

            var monDernierElement = couleurs.pop();
            console.log( couleurs );
            console.log( monDernierElement );
           /* LA mme chose est possible avec: shift ()
           la fonction splice() vous permet de faire sortir un élément*/


