const { Thought, User } = require('../models');

const thoughtController = {
    //GET ALL thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    //GET thought by Id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'Invalid ThoughtId! Please try again'});
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //POST thought
    postThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id }},
                { new: true }
            );
        })
        .then((dbUserData) => {
            if(!dbUserData) {
                return res.status(404).json({ message: 'Thought created' });
            }
            res.json({ message: 'Thought successfully created!' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
    }
};

module.exports = thoughtController;