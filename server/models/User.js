const {Schema, model} = require ('mongoose');
const bcrypt = require('bcryptjs')

//import schemna from cards.js

const cardSchema = require("./cards")

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "must use valid email address"],
    },
    password: {
        type: String,
        required:true,
    },
    // set savedCards to be an arrya of data
    savedCards: [cardSchema],
},
    //convert mongoose document to json 
    {
        toJSON : {
            virtuals:true,
        },
    }
);

//hash user password, mongoose presave hook

userSchema.pre('save', async function (next){
    if(this.isNew || this.isModified('password')){
        const saltRounds=10;
        this.password =await bcrypt.hash(this.password,saltRounds);
    }
    next();//calls the next function
});
// custom method to compare and validate password for loggin ins
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

//add cardcount when query the user

userSchema.virtual('cardCount').get(function(){
    return this.savedCards.length;
});

const User =model('User', userSchema);

module.exports = User;

