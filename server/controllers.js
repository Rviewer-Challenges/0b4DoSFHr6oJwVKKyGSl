require ('mongoose');
const createSchema = require('./utils/createSchema');
const db = require('./utils/mongoConfig');

const jsonController = async (req, res) => {
    console.log(req.body.results);
    //console.log(req.body.data);
    let newSchema = await createSchema(req.body.results);
    //let newSchema = await createSchema(req.body.data);
    //let product = [...req.body.results];
    let product = [...req.body.results];
    //let product = [...req.body.data];
        //console.log(product);
    await newSchema.create(product, (err) => {
        if (err) throw (err);
    }); 

    return res.status(200).send({mesage: "Añadido a la BDD"})
};

module.exports = jsonController;