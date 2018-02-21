import axios from 'axios'
// const URL = isProduction ? 'https://gentle-cove-60320.herokuapp.com' : 'http://localhost:8080'
const URL = 'https://gentle-cove-60320.herokuapp.com'
export default {
  postUser (dataFromFacebook, callback) {
    axios.post(`${URL}/users`, dataFromFacebook).then(callback)
  }
}