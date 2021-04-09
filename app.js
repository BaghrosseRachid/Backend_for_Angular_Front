const express = require('express');
const app =express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/Stuff');
const userRoutes = require('./routes/User');
const path = require('path');

//data base connect
mongoose.connect('mongodb+srv://rachid_baghrosse:toufik98@cluster0.ttgx8.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// let the servers change requests // applicable sur tous les routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

module.exports=app;