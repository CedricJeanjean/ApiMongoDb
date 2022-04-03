const bcrypt=require('bcryptjs');

module.exports = (app, Utilisateur, bodyParser) => {
    app.post('/register', bodyParser, async (req,res) => {

        //Vérification que l'email n'existe pas déjà
        const emailExist=await Utilisateur.findOne({email:req.body.email});
        if(emailExist){
            return res.status(400).send('Email existe déjà');
        }

        //Hash le password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password,salt);

        //Création d'un nouvel utilisateur
        var utilisateur = new Utilisateur({
            name: req.body.name,
            email : req.body.email,
            password : hash
        });

        //Ajout de l'utilisateur à la bdd
        utilisateur.save(function(err){
            if(err){
                res.send(err);
            }
            res.status(201).send({message : 'Compte créé'});
        })
    })
}