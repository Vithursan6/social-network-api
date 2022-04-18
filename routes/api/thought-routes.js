const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    postThought,
    putThought,
    delThought,
    postReaction,
    delReaction
} = require('../../controllers/thought-controllers');

// /api/thoughts
router.route('/').get(getAllThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(putThought).delete(delThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(postReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(delReaction)


module.exports = router;