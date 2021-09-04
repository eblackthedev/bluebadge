const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/lib/errors"); // for errorhandling
const{UserModel} = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require('../db')




router.delete("/:id", async(req, res) =>{
    //res.send("log delete by id called " + req.params.id)
     const User = req.params.id;
    // const user = req.params.id;
    try {
    const query = {
        where: {
             id: User
            // id: userId
        }
        };
        await UserModel.destroy(query);
        res.status(200).json({ message: " user deleted!" });
        } catch (err) {
        res.status(500).json({ error: err });
        }
    });   




module.exports = router;