const { Router } = require("express");

const users = require("./usersRouter");
const thoughts = require("./thoughtsRouter");

const router = Router();

router.use("/users", users);
router.use("/thoughts", thoughts);

module.exports = router;
