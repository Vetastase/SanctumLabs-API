const { Schema, model } = require("mongoose");


const cardSchema = new Schema(
  {
    
    title: String,
    release: String,
    description: String,
    image: {
        type: String,
        default: ""
    },
    video: {
        type: String,
        default: ""
    },
    genres: [String],
    media: String,
    text: String


});

module.exports = model("Card", cardSchema);
