const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});

    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to get Thoughts" });
  }
};

const getThoughtsById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findById(thoughtId);

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to Thought By Id | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to get Thought By Id" });
  }
};

const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const thought = await Thought.create({ thoughtText, username });

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to create Thought" });
  }
};

const updateThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to update Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to update thought" });
  }
};

const deleteThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findByIdAndDelete(thoughtId);

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to delete thought" });
  }
};

module.exports = {
  getThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};
