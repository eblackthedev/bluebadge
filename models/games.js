const {DataTypes} = require('sequelize');
const db = require('../db');
const Game = db.define('game', {
   gameName: {
               type: DataTypes.STRING(100),
                allowNull: false,
        unique: true,
            },
            maker: {                  //if it is require we need to use curly bracket
                require: true,
 allowNull: false,       //we need value that is why it is false
       type:DataTypes.STRING,
         unique: true              //can not be anywhere in db it is unique
     },
     info: {
       type: DataTypes.STRING,
       allowNull: false,
 }
})






module.exports = Game