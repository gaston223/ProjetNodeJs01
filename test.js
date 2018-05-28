// Import des modules
const http = require('http');
const calculatrice = require('calculatrice');


//Création du serveur HTTP
let server = http.createServer((request, response)=>{
    console.log('Requete vers le serveur');
    response.write('<meta charset="utf-8" />')
    response.write('<h1>Bonjour</h1>');
    response.write('<h2>Bien?</h2>');

    let resultat = calculatrice.addition(105, 134);
    response.write(`<p>Mon résultat: "${resultat}"</p>`);

    resultat=calculatrice.multiplication(11, 32);
    response.write(`<p>Multiplication: "${resultat}"</p>`);

    //utilisation de la fonction principale de la calculatrice
    resultat= calculatrice('addition', 5 ,17);
    response.write(`<p>Res Addition: "${resultat}"</p>`)

    resultat= calculatrice('multiplication', 4 ,9);
    response.write(`<p>Res multiplication: "${resultat}"</p>`)

    response.end();

});
server.listen(3001);