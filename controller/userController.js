const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/lib/errors"); // for errorhandling
const { UserModel } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/register", (req, res) => {
  const { username, email, password, name } = req.body.user;
  User.create({
    name,
    username,
    email,
    password: bcrypt.hashSync(password, 13),
  })
    .then((user) => res.status(201).json({ message: "new user created", user }))
    .catch((error) =>
      res
        .status(500)
        .json({ message: "something went wrong at /register", error })
    );
});

module.exports = router;
