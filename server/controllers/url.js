const uniqid = require("uniqid");
const urlModel = require("../models/urlModel");
// get url post route
async function genaretNeWUrl(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ errro: "url requerd" });
  const uniqueID = uniqid.time();
  const newUrl = new urlModel({
    uniqueID,
    redirectUrl: url,
  });
  await newUrl.save();
  res.json({ urlID: uniqueID });
}
async function getAnalytits(req, res) {
  const { uniqueID } = req.params;
  if (!uniqueID) return res.status(400).json({ err: "unique id is required" });
  const analytits = await urlModel.findOne({ uniqueID });
  if (!analytits) return res.status(400).json({ err: "analytits not found" });
  res.json({
    totalVisit: analytits.analysis.length,
    visitTime: analytits.analysis,
  });
}
module.exports = {
  genaretNeWUrl,
  getAnalytits,
};
