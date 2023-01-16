const LyricService = require("../services/LyricService");

exports.getAllLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.getAllLyrics();
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.createLyrics(req.body);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLyricsById = async (req, res) => {
  try {
    const lyrics = await LyricService.getLyricsById(req.params.id);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.updateLyrics(req.params.id, req.body);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLyrics = async (req, res) => {
  try {
    const lyrics = await LyricService.deleteLyrics(req.params.id);
    res.json({ data: lyrics, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
