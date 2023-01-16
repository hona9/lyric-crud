const express = require("express");
const {
  getAllLyrics,
  createLyrics,
  getLyricsById,
  updateLyrics,
  deleteLyrics,
} = require("../controllers/LyricController");

const router = express.Router();

router.route("/").get(getAllLyrics).post(createLyrics);
router.route("/:id").get(getLyricsById).put(updateLyrics).delete(deleteLyrics);

module.exports = router;
