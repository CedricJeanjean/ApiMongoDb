const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken');

module.exports = (app, Utilisateur) => {
    app.post('/login',async(req,res) => {

        //Vérification de l'email
        const utilisateur=await Utilisateur.findOne({email:req.body.email});
        if(!utilisateur){
            return res.status(401).send('Mauvais email');
        }

        //Vérification du mot de passe
        const validPass=await bcrypt.compare(req.body.password,utilisateur.password);
        if(!validPass){
            return res.status(401).send('Mauvais mot de passe');
        }

        //Génération d'un token
        const token=jwt.sign({_id:utilisateur._id}, generateRandomString(10))
        res.status(201).header('auth-token',token).send(token);

        //Ajout du token à l'utilisateur associé dans la bdd
        utilisateur.token = token; 
                utilisateur.save(function(err){
        });
    });
}

//Génère une suite aléatoire
const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}