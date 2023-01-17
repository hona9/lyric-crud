const LyricModel = require("../models/lyrics");

exports.getAllLyrics = async () => {
  return await LyricModel.find();
};

exports.createLyrics = async (lyrics) => {
  return await LyricModel.create(lyrics);
};
exports.getLyricsById = async (id) => {
  return await LyricModel.findById(id);
};

exports.updateLyrics = async (id, lyrics) => {
  return await LyricModel.findByIdAndUpdate(id, lyrics);
};

exports.deleteLyrics = async (id) => {
  return await LyricModel.findByIdAndDelete(id);
};
