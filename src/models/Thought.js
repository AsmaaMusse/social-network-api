const { Schema, model } = require("mongoose");

const moment = require("moment");

const schemaReactions = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: moment(),
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [schemaReactions],
};

const schema = new Schema(thoughtSchema);

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schema);

module.exports = Thought;
