const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", error => console.log(`Error: ${error} al conectar a la BDD`));
mongoose.connection.once("open", () => console.log("Mongo DB konektatua"));

module.exports = mongoose;