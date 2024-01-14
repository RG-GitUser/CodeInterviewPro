const router = require ('express').Router();

const {
   getsingleUser,
   createUser,
   saveCard,
   deleteCard,
   login,

} = require("../../controllers/user-controller");

const {authMiddleware} = require ('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveCard);

router.route('/login').post(login);
router.route('/me').get(authMiddleware, getsingleUser);
router.route('/cards/:cardid').delete(authMiddleware, deleteCard);

module.exports = router;