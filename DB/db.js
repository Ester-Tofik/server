const mongoose = require('mongoose');

class mongooseDB {

    constructor() { }

    async connect() {
        const connectionString = "mongodb://localhost:27017/MatnatChaim";
        await mongoose.connect(connectionString);
        console.log("DB Connected!")
    }

}
module.exports = new mongooseDB();