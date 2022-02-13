const { Router } = require("express");

const router = Router({ mergeParams: true });

router.post("/", createFriend);
router.delete("/:friendId", deleteFriend);

module.exports = router;
