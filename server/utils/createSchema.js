const mongoose = require ('mongoose');
//const jsonSchema = require ('../models/tabla');

createSchema = async (data) => {
    console.log("CreateSchema!!");
    let tabla = "";
    if (data.tabla) { tabla = data.tabla.toLowerCase().replace(/\s+/g, '')}
    
    let newArray = Object.keys(data.resultado.results[0]);
    
    const newSchema = new mongoose.Schema();
    
    let temp = {};
    newArray.map((key) => {
        temp[key] = {};
    });

    newSchema.add(temp);
    if (!tabla) return;
    try{
        let berria = mongoose.model(tabla, newSchema);
        return berria;
    } catch (err){
        console.log(err);
        return err;
    }
};

module.exports = createSchema;