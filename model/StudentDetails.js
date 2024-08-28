const Sequelize = require('sequelize');

const sequelize = require('../util/Database');

const Student = sequelize.define('student13', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    gender : Sequelize.STRING,
    parent : Sequelize.STRING,
    address : Sequelize.STRING,
    dateOfBirth : Sequelize.DATEONLY,
    email : Sequelize.STRING,
    section : Sequelize.CHAR,
    phoneNumber : Sequelize.BIGINT,
    rollNumber : Sequelize.INTEGER
});

module.exports = Student;