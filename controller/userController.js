const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/lib/errors"); // for errorhandling
const {UserModel} = require("../models");
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

    router.get('/test', (request, response) => {
    response.send('blue badge');
    })
    
    router.post("/register", async(req, res) =>{
    const {username, email, password} = req.body.user; //username
    //console.log("register", req)

        try{
        const User = await UserModel.create({  // if you want username put bellow
        username,
        email,
        password: bcrypt.hashSync(password, 13),
        });
        //token because it is like atag we need it when we register/remember a club gate/.
        const token = jwt.sign({id: User.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
    
        res.status(201).json({
        message: "User successfully registered",
        user: User,
        sessionToken: token
    });
    }catch (err){
        if(err instanceof UniqueConstraintError){ //catches attempts to insert a record with a key that already exists in the table
        res.status(409).json({
        messsage: "user already in use",
        });
        }else {
            res.status(500).json({
            message: "Failed to register user" + err,
            });
        }
    }
    //res.send("register called")
    });
    
    router.post("/login", async(req, res) =>{
    //res.send("login called")
    const {email, password } = req.body.user;
    
        try{
        const loginUser = await UserModel.findOne({
            where: {
            email: email,
            }
        });
        
            if(loginUser){  //res.status(200).json
        
            let passwordComparison = await bcrypt.compare(password,loginUser.password);
            
            if(passwordComparison){
            let token = jwt.sign({id: loginUser.id}, process.env.JWT_SECRET , {expiresIn: 60 * 60 * 24});   
            
            res.status(200).json({  
            user:loginUser,
            message: "User successfully logged in!",
            sessionToken: token
            });
        }else {
            res.status(401).json({
                message: "Incorrect username or password"
            })
        }
        }else{
            res.status(401).json({
                message: 'Incorrect username or password'
            });
            }
        }catch(error){
            res.status(500).json({
                message:"Failed to log user in"
            })
        }
    });

   
    
    module.exports = router;



