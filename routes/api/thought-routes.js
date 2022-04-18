const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    postThought,
    putThought,
    delThought
} = require('../../controllers/thought-controllers');

// /api/thoughts
router.route('/').get(getAllThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(putThought).delete(delThought);


module.exports = router;