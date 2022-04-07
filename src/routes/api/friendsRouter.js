const { Router } = require("express");

const {
  createFriend,
  deleteFriend,
} = require("../../controller/api/friendsController");

const router = Router({ mergeParams: true });

router.post("/", createFriend);
router.delete("/:friendId", deleteFriend);

module.exports = router;
