const { Schema } = require("mongoose");
const gameSchema = require("./Game");
const reviewSchema = new Schema({
    text: {
        type: String,
        
    }
})