const {Schema, model} = require ('mongoose');

const HelloSchema = new Schema ({
    message:String
});

const Hello = model('Hello', HelloSchema);

module.exports = Hello;