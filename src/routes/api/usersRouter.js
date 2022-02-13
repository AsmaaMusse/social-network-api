const { Router } = require("express");

const {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/api/usersController");

const friends = require("./friendsRouter");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.use("/:userId/friends", friends);

module.exports = router;
