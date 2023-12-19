const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/Portfolio"

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connection Successfull");
        }).catch(() => {
            console.log("Connection Failed");
        })
}

module.exports = connectToMongo;