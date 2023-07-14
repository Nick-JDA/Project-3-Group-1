const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const gameSchema = require("./Game");

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            require: true,
        },
        gameCart: {
            type: Schema.Types.ObjectId,
            ref: "Game",
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('gameCount').get(function () {
    return this.gameCart.length;
});

const User = model('User', userSchema);

module.exports = User;
  