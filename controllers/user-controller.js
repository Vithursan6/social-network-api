const { User, Thought } = require('../models');

const userController = {
    
    //GET ALL users
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then((dbUserData) => {
            res.json(dbUserData);  
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    //GET user by Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then ((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Invalid user Id! Please try again."});
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //POST new user
    postUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
            
    }
    
};

module.exports = userController;