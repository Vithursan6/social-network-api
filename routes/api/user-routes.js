const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    postUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(postUser);

// /api/users/:userId
router.route('/:userId').get(getUserById);

module.exports = router;