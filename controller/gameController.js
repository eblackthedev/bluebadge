const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");

router.get("/game", (req, res) => {
  res.send("first test");
});

router.get("/user", (req, res) => {
  res.send("second test");
});

module.exports = router;
