const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const Recipe = require('./recipeModel'); 
const User = require('./userModel'); 

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MongoDB');
  // Vous pouvez commencer à utiliser MongoDB ici
});

  // Route pour ajouter une recette
app.post('/recipes', async (req, res) => {
    try {
        const collection = client.db("tp-recette").collection("recipes");
        const newRecipe = new Recipe(req.body);
        await collection.insertOne(newRecipe);
        res.status(201).send("created");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route pour récupérer toutes les recettes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const collection = client.db("tp-recette").collection("users");
        const newUser = new User(req.body);
        await collection.insertOne(newUser);
        res.status(201).send("created");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route pour récupérer tous les utilisateurs
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});