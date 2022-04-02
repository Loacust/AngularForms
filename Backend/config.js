const Sequelize = require('sequelize');
const config = new Sequelize('taskmanager', 'root', 'password22669', {dialect: 'mysql'});

module.exports = config;