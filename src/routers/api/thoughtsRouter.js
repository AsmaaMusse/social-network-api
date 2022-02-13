const { Router } = require("express");

const reactions = require("./reactionsRouter");
const router = Router();

router.get("/", getThoughts);
router.get("/:id", getThoughtsById);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

router.use("/:thoughtId/reactions", reactions);

module.exports = router;
