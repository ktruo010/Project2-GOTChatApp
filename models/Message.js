const Sequelize = require('sequelize')
const connection = require('../config')

class Message extends Sequelize.Model { }
Message.init({
  username: Sequelize.STRING,
  message: Sequelize.STRING
}, { sequelize: connection, modelName: 'message' })

module.exports = Message
