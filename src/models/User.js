const { Schema, model } = require("mongoose");

const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
};

const schema = new Schema(userSchema);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", schema);

module.exports = User;
