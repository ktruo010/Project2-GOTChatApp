const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:password@localhost:3306/chat_app')
