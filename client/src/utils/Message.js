import axios from 'axios'

const Messages = {
  getAll: _ => axios.get('/messages'),
  postOne: message => axios.post('/messages', message),
  getLength: _ => axios.get('/getcount')
}

export default Messages
