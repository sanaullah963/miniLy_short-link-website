const express = require("express");
const router = express.Router();
const { genaretNeWUrl,getAnalytits } = require("../controllers/url");

router.post("/", genaretNeWUrl);
router.get("/analytits/:uniqueID", getAnalytits);

module.exports = router;
