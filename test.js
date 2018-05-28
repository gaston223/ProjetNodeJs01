// Import des modules
const module1 = require('module1');
const http = require('http');

//Création du serveur HTTP
let server = http.createServer((request, response)=>{
    console.log('Requete vers le serveur');
    response.write('<h1>Hello</h1>');
    response.write('<h2>Fine</h2>');
    response.end();
});
server.listen(3001);