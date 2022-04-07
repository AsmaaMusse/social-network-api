const { User } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("friends");

    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to get Users" });
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id)
      .populate("friends")
      .populate("thoughts");

    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Users By Id | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to get Users By Id" });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const users = await User.create({ username, email });

    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to create Users" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to update Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to update Users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndDelete(id);

    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, Error: "Failed to delete Users" });
  }
};

module.exports = { getUsers, getUsersById, createUser, updateUser, deleteUser };
