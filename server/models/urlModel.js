const mongooes = require("mongoose");

const urlModel = mongooes.Schema(
  {
    uniqueID: {
      require: true,
      type: String,
      unique: true,
    },
    redirectUrl: {
      require: true,
      type: String,
    },
    analysis: [
      {
        type: Number,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongooes.model("url", urlModel);
