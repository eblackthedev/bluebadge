const {DataTypes} = require('sequelize')
    const db = require('../db')
    const User = db.define('user', {
            /*username: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            email: {                  //if it is require we need to use curly bracket
                require: true,
                allowNull: false,       //we need value that is why it is false
                type:DataTypes.STRING,
                unique: true              //can not be anywhere in db it is unique
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
            */
        });

        module.exports = User
        