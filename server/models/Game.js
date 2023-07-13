const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const gameSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true, 
    },
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    reviews: [
        reviewSchema
    ]
});

module.exports = gameSchema;