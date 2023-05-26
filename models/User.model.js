const { Schema, model } = require("mongoose");

const userSchema = new Schema (
    {

    username: {
        type: String, required: true, unique: true, trim: true
    },
    password: { 
        type: String, required: [true, "Please enter password"]
    },
    email: { 
        type: String, unique: true, required: true [true, "Please enter email"],
        lowercase: true, trim: true
    },
    imageUrl: {
        type: String,
        default: ""
    } 
});

module.exports = model("User", userSchema)