const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.DB_CNN , {
    });

    console.log('DB Online')

    } catch (error) {
        console.error(error);
        throw new Error('Error al iniciar la DB ver logs')
    }
    
    
}

module.exports = {
    dbConnection
}