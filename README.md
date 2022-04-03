## Api de connexion sécurisée avec MongoDB.  

Lancement de l'api avec: node api.js  

-----------------

### POST register:  

  Pour créer un compte, il faut envoyer un json contenant name, email et password à l'endpoint /register avec la méthode POST.  
  Exemple du json:  
  {  
    "name" : "Cedric",  
    "email" : "cedricjeanjean311@gmail.com",  
    "password": "LmpOsq829_Zs"  
  }  

  Retours possibles:  
    400 "Email existe déjà"  
    201 "Compte créé"  

-----------------

### POST login:  

  Il faut récupérer un token pour utiliser l'api, pour cela il faut envoyer un json contentant email et password à l'endpoint /login avec la méthode POST.  
  Exemple du json:  
  {  
    "email" : "cedricjeanjean311@gmail.com",  
    "password": "LmpOsq829_Zs"  
  }  
  
  Retours possibles:  
    401 "Mauvais email"  
    401 "Mauvais mot de passe"  
    201 token  
   
-----------------

### GET users:  

  Pour récupérer la liste des utilisateurs, il faut accéder à l'endpoint /users avec la méthode GET et avec le token en Authorization.  
  
  Retours possibles:  
    401 Accès refusé  
    401 Token invalide  
    200 Liste des noms des utilisateurs  
  
  
