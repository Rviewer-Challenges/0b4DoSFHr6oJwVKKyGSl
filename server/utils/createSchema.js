const mongoose = require ('mongoose');
//const jsonSchema = require ('../models/tabla');

createSchema = async (data) => {
    console.log("CreateSchema!!");
    console.log(data);
    //let newArray = Object.keys(data[0]);
    let newArray = Object.keys(data[0]);
    console.log(newArray);
    //let newArray = Object.keys(data);
    const newSchema = new mongoose.Schema();
    let temp = {};

    newArray.map((key) => {
        temp[key] = {};
    });

    newSchema.add(temp);
    try{
        let berria = mongoose.model('post', newSchema);
        return berria;
    } catch (err){
        console.log(err);
        return err;
    }
    
//    return berria;
};

module.exports = createSchema;