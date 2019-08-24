const router = require("express").Router();

router.get("/", (req, res) =>
  res.send("Contact Message Handler - Server Side")
);

module.exports = router;
