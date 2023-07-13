const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const gameSchema = new Schema(
    {
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
        reviews: reviewSchema
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

gameSchema.virtual('reviewCount').get(function () {
    return this.reviews.length;
});

const Game = model('User', reviewSchema);

module.exports = Game;