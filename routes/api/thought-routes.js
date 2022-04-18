const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    postThought
} = require('../../controllers/thought-controllers');

// /api/thoughts
router.route('/').get(getAllThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);


module.exports = router;