const { User } = require("../../models");

const createFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const user = await User.findByIdAndUpdate(id, {
      $push: { friends: userId },
    });

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to create friend for user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create friend for user" });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const { friendId, id } = req.params;

    const user = await User.findByIdAndUpdate(id, {
      $pull: { friends: friendId },
    });

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete friend" });
  }
};

module.exports = { createFriend, deleteFriend };
