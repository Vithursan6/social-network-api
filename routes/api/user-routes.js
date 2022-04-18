const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    delUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(postUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(putUser).delete(delUser)

module.exports = router;