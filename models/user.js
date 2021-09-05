const {DataTypes} = require('sequelize')
const db = require('../db')
const User = db.define('user', {

        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        
        email: {         
            require: true,
            allowNull: false,       
            type:DataTypes.STRING,
            unique: true              
        },
        password: {
            require: true,
            type: DataTypes.STRING,
            allowNull: false,
            }
        });

module.exports = User
        