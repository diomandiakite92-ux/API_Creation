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
    "content": "Contenu du 1er post"
  }'

```
