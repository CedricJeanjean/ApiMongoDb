var express = require('express');

//Connexion à la bdd
var conn = require('./utils/connection.js');

//Récupération du schéma de l'utilisateur
var Utilisateur = require('./utils/shemaModule.js');

//Création de express pour le serveur
var app = express(); 
app.use(express.json());
const bodyParser = require('body-parser').json();
app.listen(3000, () => console.log('Serveur sur écoute à l\'adresse http://'+conn[0]+':'+conn[1]));

//Ajout de tous les endPoints
require('./apiMethods/users.js')(app,Utilisateur);
require('./apiMethods/register.js')(app,Utilisateur,bodyParser);
require('./apiMethods/login.js')(app,Utilisateur);