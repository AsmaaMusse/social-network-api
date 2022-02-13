const { Router } = require("express");

const friends = require("./friendsRouter");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getRouterById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.use("/:userId/friends", friends);

module.exports = router;
