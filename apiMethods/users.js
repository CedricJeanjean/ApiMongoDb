 module.exports = (app,Utilisateur) => {
app.get('/users', (req, res) => {
    Utilisateur.find(async (err, utilisateur) => {
        if (err){
            res.send(err); 
        }

        //Si le header ne contient pas de token, refuse l'accès
        const token=req.header('Authorization');
        if(!token){
            return res.status(401).send('Accès refusé');
        }

        //Vérification du token
        const utilisateurtoken =await Utilisateur.findOne({token:token});
        if(!utilisateurtoken){
            return res.status(401).send('Token invalide');
        }

        //Créer une liste avec le nom de tous les utilisateurs, on ne retourne pas l'email et le mdp qui sont privés
        retourUtilisateur = []
        for(let i = 0; i<utilisateur.length; i++){
            retourUtilisateur.push({"name": utilisateur[i].name})
        }

        res.json(retourUtilisateur);
    }); 
});
}