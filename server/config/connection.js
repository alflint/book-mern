const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Cluster78125:mELgHhDKNQ94PAOT@cluster78125.ubza9vy.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
