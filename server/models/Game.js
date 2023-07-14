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
        reviews: {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
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

const Game = model('Game', gameSchema);

module.exports = Game;