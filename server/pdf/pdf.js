const express = require("express");
const multer = require("multer");

const mongoose = require("mongoose");
const router = express.Router();

//pdf schema
const pdfSchema = new mongoose.Schema({
  pdf: {
    type: Buffer,
  },
});

const Pdf = mongoose.model("pdf", pdfSchema);
//pdf schema end

//storage for pdf file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.post("/", upload.single("file"), (req, res) => {
  const pdf = new Pdf({ pdf: req.file.buffer });
  pdf.save((err, pdf) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("pdf");
    res.send(pdf);
  });
});

// router.get("/upload/:id", (req, res) => {
//   Pdf.findOne({ _id: req.params.id }, (err, pdf) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     if (!pdf) {
//       return res.status(404).send("No pdf found.");
//     }
//     res.contentType("application/pdf");
//     res.send(pdf.pdf);
//   });
// });

module.exports = router;
