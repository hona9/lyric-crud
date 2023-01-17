const LyricService = require("../services/LyricService");
const { check, validationResult } = require("express-validator");

exports.getAllLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.getAllLyrics();
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLyrics = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required")
    .isAlpha()
    .withMessage("Only aphabets should be used"),
  check("genre")
    .not()
    .isEmpty()
    .withMessage("Genre is required")
    .isIn(["pop", "rock", "punk"])
    .withMessage("Genre must be pop, rock or punk"),
  check("artist").not().isEmpty().withMessage("Artist is required"),
  check("body")
    .not()
    .isEmpty()
    .withMessage("Lyrics is required")
    .isLength({ min: 100, max: 700 })
    .withMessage("Lyrics must be between 100 and 700 characters"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const lyrics = await LyricService.createLyrics(req.body);
      res.json({ data: lyrics, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

exports.getLyricsById = async (req, res) => {
  try {
    const lyrics = await LyricService.getLyricsById(req.params.id);
    console.log(lyrics.body);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLyrics = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required")
    .isAlpha()
    .withMessage("Only aphabets should be used"),
  check("genre")
    .not()
    .isEmpty()
    .withMessage("Genre is required")
    .isIn(["pop", "rock", "punk"])
    .withMessage("Genre must be pop, rock or Punks"),
  check("artist").not().isEmpty().withMessage("Artist is required"),
  check("body")
    .not()
    .isEmpty()
    .withMessage("Lyrics is required")
    .isLength({ min: 100, max: 700 })
    .withMessage("Lyrics must be between 100 and 700 characters"),
  async (req, res) => {
    try {
      const lyrics = await LyricService.updateLyrics(req.params.id, req.body);
      res.json({ data: lyrics, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

exports.deleteLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.deleteLyrics(req.params.id);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
