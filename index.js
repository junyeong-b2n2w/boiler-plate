const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jun:abcd1234@bolier.7s599.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("HELLO, WORLD!  hhihi"));

app.listen(port, () => console.log(`example ${port}`));
