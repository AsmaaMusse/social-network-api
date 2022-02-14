const { Thought } = require("../../models");

const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { ...req.body } },
      },
      { new: true }
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to create a reaction for Thought | ${error.message}`
    );
    return res
      .status(500)
      .json({ success: false, Error: "Failed to create reaction" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { _id: reactionId } },
      },
      { new: true }
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to delete reaction" });
  }
};

module.exports = { createReaction, deleteReaction };
