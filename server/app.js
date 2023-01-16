let db = require("./db");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/api", routes);
// db.connectToServer(function (err) {
//   // start the rest of your app here
// });
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
