const { Schema } = require("mongoose");

const cardSchema = new Schema ({
    question: [
        {
            type:String,
        }
    ],
    answer: {
        type:String,
        required:true,
    },
    //saved card id from json data
    cardId: {
        type:String,
        required: true,
    },
    });

    module.exports = cardSchema;

    