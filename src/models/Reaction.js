const { Schema } = require("mongoose");

const moment = require("moment");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },

  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: moment(),
  },
};

const schemaReaction = new Schema(reactionSchema);

module.exports = schemaReaction;
