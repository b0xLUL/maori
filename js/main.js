// TODO: Het lijkt erop dat import en require niet willen werken for some reason, moet ik even naar kijken - Mels
const mongoose = require("mongoose");
const mongo = require("mongo.js");
const config = require("../config.json")
// import mongoose from "mongoose"
// import mongo from "./mongo.js"

const tryToConnect = async () => {
    await mongo().then(mongoose => {
        try {
            console.log("connected to MongoDB Database")
        } finally {
            mongoose.connection.close();
        };
    });
}

tryToConnect()
