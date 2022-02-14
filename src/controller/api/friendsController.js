const { User } = require("../../models");

const createFriend = async (req, res) => {
  try {
    const { UserId } = req.params;
    const data = await User.findByIdAndUpdate(
      UserId,
      {
        $push: { friends: req.body._id },
      },
      { new: true }
    ).populate("friends");

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create a friend for User`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to create friend" });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const data = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { friends: { $in: [friendId] } },
      },
      {
        new: true,
      }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to delete friend" });
  }
};

module.exports = { createFriend, deleteFriend };
