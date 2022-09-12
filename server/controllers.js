require ('mongoose');
const createSchema = require('./utils/createSchema');
const db = require('./utils/mongoConfig');

const jsonController = async (req, res) => {
    let newSchema = await createSchema(req.body);
    if (!newSchema) return res.send({ mensaje: "No has seleccionado tabla" })
    let product = [...req.body.resultado.results];
    
    await newSchema.create(product, (err) => {
        if (err) throw (err);
    }); 

    return res.status(200).send({mesage: "Añadido a la BDD"})
};

module.exports = jsonController;