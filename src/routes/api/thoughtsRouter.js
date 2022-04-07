const { Router } = require("express");

const {
  getThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controller/api/thoughtsController");

const reactions = require("./reactionsRouter");

const router = Router();

router.get("/", getThoughts);
router.get("/:id", getThoughtsById);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

router.use("/:id/reactions", reactions);

module.exports = router;
