const {User, Question} = require ('../models');

//import sign token function from auth

const { signToken} = require ('../utils/auth');
module.exports = {
    //get single user by id or name

    async getsingleUser({user = null, params },res){
        const foundUser = await User.findOne({
            $or: [{_id:user? user._id: params.id}, {username:params.username}],
        });

        if (!foundUser) {
            return res.status(400).json({message:'cannot find user id'});
        }
        res.json(foundUser);
    },
    // create a user, sign a token, and send it back client SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  //save a card to user's savedCards,user comes fro req.user

  async saveCard({user, body}, res) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {_id:user._id},
            {$addToSet: {savedCards:body}},
            {new: true, runValidators: true}
        );
        return res.json(updatedUser)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);    
    }
  },

  //remove a card from savedBooks
  async deleteCard({user, params }, res){
    const updatedUser = await User.findOneAndUpdate(
        {_id :user._id},
        {$pull: {savedCards:{cardId:params.cardId}}},
        {new: true}
    );
    if(!updatedUser){
        return res.status(404).json({ message : "couldn't find user with this id"});
    }
    return res.json(updatedUser)
  },

};