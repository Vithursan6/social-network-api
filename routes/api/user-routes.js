const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    delUser,
    postFriend,
    delFriend
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(postUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(putUser).delete(delUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(postFriend).delete(delFriend);

module.exports = router;