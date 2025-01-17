const express = require("express");
const { getTips, addTip } = require("../controllers/tip.Controller");

const router = express.Router();

router.get("/tips", getTips);
router.post("/tips", addTip);

module.exports = router;
