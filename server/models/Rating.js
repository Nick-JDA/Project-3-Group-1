const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
    {
        value: {
            type: Number,
            required: true,
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

const Rating = model('Rating', ratingSchema);

module.exports = Rating;


