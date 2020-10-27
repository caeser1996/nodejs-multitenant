var Sequelize = require('sequelize');
const sequelize = require('./service/db');
var User = sequelize.define('sk_user', 
    {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
    }
);
module.exports = User