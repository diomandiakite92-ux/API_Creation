## REST API

- **express**: framework web pour créer des application web et des serveurs Node.js
- **nodemon**: utilitaire qui permet de redémarrer automatiquement le serveur à chaque modification des fichiers javascript
- **MongoDB Node.js Driver**: pilote Node.js pour MongoDB
- **mongoDB Compass** [télécharger](https://www.mongodb.com/products/tools/compass): interface graphique pour MongoDB

## Installation :

`npm install`

### MongoDB Node.js Driver [lien](https://www.npmjs.com/package/mongodb)

`npm i mongodb`

### Mongoose [lien](https://mongoosejs.com/)

`npm install mongoose --save`

## Lancer le projet :

`npm start`

## Tester le projet :

### Envoi d'une requête GET à l'URL http://localhost:5000/posts

`curl http://localhost:5000/posts`

### Envoi d'une requête POST à l'URL http://localhost:5000/posts/create

```
curl -X POST \
  http://localhost:5000/posts/create \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "new post",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lacus in lorem interdum, at mollis sem consequat. Vestibulum tempus fermentum justo, id molestie risus rhoncus ac. Phasellus augue purus, finibus non posuere molestie, laoreet at metus. Nam posuere non tellus nec laoreet. Etiam eu blandit lacus.",
    "created_at": "2020-01-01T00:00:00.000Z",
    "author": "John Doe"
  }'
```

### Requêtes POST pour créer un utilisateur http://localhost:5000/auth/register

curl -X POST \
 http://localhost:5000/auth/register \
 -H 'Content-Type: application/json' \
 -d '{
"firstName": "Diana",
"lastName": "L",
"username": "diana2023",
"email": "diana2023.com",
"password": "0./<>@5/#89"
}'

curl -X POST \
 http://localhost:5000/auth/register \
 -H 'Content-Type: application/json' \
 -d '{
"firstName": "Diana",
"lastName": "Linares",
"username": "diana2023",
"email": "diana2023@gmail.com",
"password": "0./<>@5/#89"
}'

### Requêtes POST pour connecter un utilisateur http://localhost:5000/auth/login

curl -X POST \
 http://localhost:5000/auth/login \
 -H 'Content-Type: application/json' \
 -d '{
"email": "diana@gmail.com",
"password": "0./<>@5/#89"
}'

curl -X POST \
 http://localhost:5000/auth/login \
 -H 'Content-Type: application/json' \
 -d '{
"email": "diana2023@gmail.com",
"password": "test123"
}'

curl -X POST \
 http://localhost:5000/auth/login \
 -H 'Content-Type: application/json' \
 -d '{
"email": "diana2023@gmail.com",
"password": "0./<>@5/#89"
}'

### Documentation API:

https://diomandiakite92-7078860.postman.co/workspace/Dioman-Diakit%C3%A9's-Workspace~33810732-dcd1-4d80-8e59-6f51765e13fd/collection/51149644-51b7b0aa-be2d-42fa-b6f9-844b27cabb5f?action=share&creator=51149644&active-environment=51149644-d12997c0-e8c7-497f-8762-ac2596390a5b
