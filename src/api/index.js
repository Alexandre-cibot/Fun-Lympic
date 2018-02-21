import axios from 'axios'
// const URL = isProduction ? 'http://alexandrecibot.com:8080' : 'http://localhost:8080'
const URL = 'http://alexandrecibot.com:8080'
export default {
  postUser (dataFromFacebook, callback) {
    axios.post(`${URL}/users`, dataFromFacebook).then(callback)
  }
}
