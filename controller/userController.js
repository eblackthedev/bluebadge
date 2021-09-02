const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/lib/errors"); // for errorhandling
const{UserModel} = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");




module.exports = router;