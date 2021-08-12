const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;
const uniqueValidator = require("mongoose-unique-validator");
console.log("connecting to", url);

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB:", error.message);
    });

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        unique: true,
    },
    number: {
        type: String,
        minlength: 8,
    },
});
personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
personSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Persona", personSchema);
