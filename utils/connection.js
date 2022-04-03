var mongoose = require('mongoose'); 

//Hostname et Port du server
var hostname = 'localhost'; 
var port = 3000; 

//URL de la bdd
var urlmongo = "mongodb+srv://CedricJeanjean:BM5ZVKWXj9xoMpyX@cluster0.aezvj.mongodb.net/StrategInTestTechnique?retryWrites=true&w=majority"; 

//Connexion à la bdd
mongoose.connect(urlmongo);

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la bdd OK"); 
}); 

module.exports = [hostname, port];