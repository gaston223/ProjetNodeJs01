// Import des modules
const http = require('http');
const EventEmitter=require('events').EventEmitter;

//On créé le match (il pourra créer et émettre des évenements)
let match = new EventEmitter();

//On initialise les points de chaque equipe
let pointsA = 0, pointsB=0;

// Definition de l'évenement
match.on('panier',(equipe, nbPoints)=>{

    // le set timeout permet de simuler un appel a la bdd
    setTimeout(()=>{
        
        //selon l'equipe passée on ajoute des points à cette equipe
        if(equipe==='equipe1'){
            pointsA+= nbPoints;
        }else if(equipe === 'equipe2'){
            pointsB += nbPoints;
        }
        

    console.log('score: equipe1 : ' + pointsA + ' , equipe2: ' + pointsB);
    }, 100);
  
});

//Emission de l'evenement 

/***DEBUT DU MATCH**/

/* Nouveau panier */

match.emit('panier','equipe1',2);
match.emit('panier','equipe2',3);
match.emit('panier','equipe2',2);
match.emit('panier','equipe2',32);




/* Test du module calculatrice
//Création du serveur HTTP
const calculatrice = require('calculatrice');
let server = http.createServer((request, response)=>{
    console.log('Requete vers le serveur');
    response.write('<meta charset="utf-8" />')
    response.write('<h1>Bonjour</h1>');
    response.write('<h2>Bienvenue sur une page générée par NodeJS</h2>');

    let resultat = calculatrice.addition(105, 134);
    response.write(`<p>Mon résultat: "${resultat}"</p>`);

    resultat=calculatrice.multiplication(11, 32);
    response.write(`<p>Multiplication: "${resultat}"</p>`);

    //utilisation de la fonction principale de la calculatrice
    resultat= calculatrice('addition', 5 ,17);
    response.write(`<p>Res Addition: "${resultat}"</p>`)

    resultat= calculatrice('multiplication', 4 ,9);
    response.write(`<p>Res multiplication: "${resultat}"</p>`)

    resultat= calculatrice('fghfg', 4 ,9);
    response.write(`<p>Test bidon(fonction principale): "${resultat}"</p>`)

    // Renvoi de la réponse
    response.end();

});
server.listen(3001);*/