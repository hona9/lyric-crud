const express = require("express");
const { default: mongoose } = require("mongoose");
const LyricRouter = require("./routes/route");
const bodyParser = require("body-parser");
const pdfRoute = require("./pdf/pdf");

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/lyrics", LyricRouter);
app.use("/upload", pdfRoute);

//mongodb configuration
const uri =
  "mongodb+srv://hona:hona@cluster0.jl6ly3g.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
}

connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
