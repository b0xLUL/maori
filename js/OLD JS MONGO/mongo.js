const mongoose = require("mongoose")

module.exports = async (uri, callback) => {

    let mongoPath = process.env.MONGOPATH
    if(!mongoPath) {
        const econfig = require("../../config.json") //Config if ENV isnt avaiable
        mongoPath = econfig.mongopath
    }

    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return mongoose;
}