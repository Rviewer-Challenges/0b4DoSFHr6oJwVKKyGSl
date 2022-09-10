require('dotenv').config();
const express = require("express");
require ('body-parser');
require ('./utils/mongoConfig');

const cors = require('cors');
const logger = require('morgan');

const cookieParser = require('cookie-parser');
const jsonController = require('./controllers');

const routes = require('./routes');

const app = express();
app.use(logger('dev'));

const PORT = process.env.LOCAL_PORT || 8080;

app.use(cors());
/* app.use(cors({
  origin: "http://localhost:3000" || "http://localhost:5000", // <-- location of the react app were connection to
  credentials: false
})); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/* app.use('/', (req, res) => {
    res.send("Kaixo munduari");
}); */
//app.use('/json', routes);
app.post('/json', jsonController);

/* app.use('/', (req, res) => {
    console.log(req);
    res.json({ message: "Kaixo nire web orrialde berritik!" });
});  */
/* app.use('/api', routesProducts);
app.use('/api/users', routesUsers); */

app.get("/kaixo", (req, res) => {
    res.json({ message: "Kaixo munduari!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});