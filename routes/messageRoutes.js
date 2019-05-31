const { Message } = require('../models')

module.exports = app => {
  // GET all messages
  app.get('/messages', (req, res) => {
    Message.findAll()
      .then(messages => res.json(messages))
      .catch(error => console.log(error))
  })
  // POST a message
  app.post('/messages', (req, res) => {
    Message.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(error => console.log(error))
  })
  app.get('/getcount', (req, res) => {
    Message.count()
      .then(count => res.json({ count }))
      .catch(error => console.log(error))
  })
}
