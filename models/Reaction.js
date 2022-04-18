const { Schema, Types } = requrie('mongoose');
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.OjectId,
            default: () => new Types.OjectId();
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;