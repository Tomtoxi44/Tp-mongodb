const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    mail: String, // Assure-toi que c'est bien le champ pour stocker le mot de passe
});

const User = mongoose.model('User', userSchema);

module.exports = User;