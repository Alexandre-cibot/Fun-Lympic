import axios from 'axios'
// const URL = isProduction ? 'https://gentle-cove-60320.herokuapp.com' : 'http://localhost:8080'
// const URL = 'https://gentle-cove-60320.herokuapp.com'
// const URL = 'http://localhost:8080'
const URL = 'https://morning-inlet-27716.herokuapp.com'
export default {
  postUser (dataFromFacebook) {
    return axios.post(`${URL}/users`, dataFromFacebook)
  },
  getProfile (userId) {
    return axios.get(`${URL}/users/${userId}`)
  },
  respondToDefi (challengeId, score) {
    return axios.patch(`${URL}/challenges/${challengeId}`, {
      scoreTargetUserId: score
    })
  },
  getFacebookSwimming (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_facebook/swimming`)
  },
  getFacebookAthletics (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_facebook/athletics`)
  },
  getCountryAthletics (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_pays/athletics`)
  },
  getCountrySwimming (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_pays/swimming`)
  },
  getPersoWorldAthletics (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_world/athletics`)
  },
  getPersoWorldSwimming (userId) {
    return axios.get(`${URL}/ranking/${userId}/perso_world/swimming`)
  },
  getWorldSwimming (userId) {
    return axios.get(`${URL}/ranking/${userId}/world/swimming`)
  },
  getWorldAthletics (userId) {
    return axios.get(`${URL}/ranking/${userId}/world/athletics`)
  },
}
