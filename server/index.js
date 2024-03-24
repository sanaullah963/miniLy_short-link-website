const express = require("express");
const mongooes = require("mongoose");
const url = require("./router/url");
const urlModel = require("./models/urlModel");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/url", url);

const PORT = process.env.PORT || 8000;

app.get("/:uniqueID", async (req, res) => {
  const { uniqueID } = req.params;
  const entry = await urlModel.findOneAndUpdate(
    { uniqueID },
    {
      $push: {
        analysis: Date.now(),
      },
    }
  );
  res.redirect(entry?.redirectUrl);
});

// create server
app.get("/", (req, res) => {
  res.json("short-link home route");
});
app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
// connect mogooes
const connect = async () => {
  try {
    await mongooes.connect(process.env.MONGO_URI);
    console.log("mongooes connect successfull");
  } catch (err) {
    console.log(`mongodb error ${err}`);
  }
};
connect();
