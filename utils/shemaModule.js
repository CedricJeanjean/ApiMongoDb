const mongoose = require('mongoose'); 

//Schéma de l'utilisateur
const utilisateurSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String
}); 
 
module.exports = mongoose.model('Utilisateurs', utilisateurSchema);