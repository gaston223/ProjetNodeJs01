// récuperation de la classe de base des evenements
const EventEmitter = require('events').EventEmitter;

/*Initialisation des variables*/
let scoreA=0; //Score de l'equipe A
let scoreB=0; // Score de l'equipe B
let match = new EventEmitter(); // On initialise le match (pour gérer les évenements)

//Fonction de traitement d'un panier
function addScore(equipe , nbPoints){
    setTimeout(()=>{
        
        //selon l'equipe passée on ajoute des points à cette equipe
        if(equipe==='A'){
            scoreA+= nbPoints;
        }else if(equipe === 'B'){
            scoreB += nbPoints;
        }
        

    console.log('score: equipeA: ' + scoreA + ' , equipeB: ' + scoreB);
    }, 100);
}
function sifflet(equipe, nbPoints){
    console.log('----TUUUUTTTT----');
    console.log("L'equipe" + equipe+ " a marqué " + nbPoints +"points");

}

function stopMatch(){
    
    //On supprime les traitements liés à l'evenemnt "panier"
    //match.removeListener('panier', addScore, sifflet);
    //Equivalent
    match.removeAllListeners('panier');
    console.log(' |||FIN DU GAME|||');

}

// Initialisation des événements (on attache de straitements à des evenements)
match.on('panier', addScore);
match.on('panier', sifflet);
match.once('finDeMatch', stopMatch);

/** Début du match ***/

//Lequipe A marque 1 panier de 2 points
match.emit('panier','A',2);
match.emit('panier','B',2);
match.emit('panier','A',3);
match.emit('finDeMatch');
match.emit('panier','A',3);

/** Fin du match ***/