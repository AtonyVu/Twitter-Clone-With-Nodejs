const express = require("express");
const router = express.Router();

router.get("/:id", function (req, res) {
  console.log("chạy get");
  res.redirect("/user");
});

module.exports = router;
