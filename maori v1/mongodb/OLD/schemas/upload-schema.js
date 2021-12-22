const mongoose = require("mongoose")
const uuid = require("uuid")

// Create the type
const reqString = {
    type: String,
    required: true
}

// Generate a Random ID based on MAC and IPv6
const _id = uuid.uuidv4()

// Create the Schema
const uploadSchema = mongoose.Schema({
    _id: _id,
    originalSentence: reqString,
    maoriSentence: reqString
});

// Export the schema to the model "zinnen"
module.exports = mongoose.model('zinnen', uploadSchema);