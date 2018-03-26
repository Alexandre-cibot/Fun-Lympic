import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import router from './../router'
import API from '../api/index.js'

export default class AuthService {
  constructor () {
    this.authenticated = this.isAuthenticated()
    this.authNotifier = new EventEmitter()
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid email profile'
    })
  }

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // Envoie des informations renvoyées par Facebook dans l'API
        API.postUser(authResult).then(dataFromAPI => {
          this.setSession(dataFromAPI)
          router.replace('competition')
        })
      } else if (err) {
        router.replace('competition')
        console.error(`Error: ${err.error}.`)
      }
    })
  }

  getUserProfileFromCache () {
    return JSON.parse(localStorage.getItem('profile'))
  }

  setSession (dataFromAPI) {
    // Set the time that the access token will expire at
    // let expiresAt = JSON.stringify(
    //   authResult.expiresIn * 1000 + new Date().getTime()
    // )
    localStorage.setItem('profile', JSON.stringify(dataFromAPI.data))
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  setLocalStorage (dataFromAPI) {
    localStorage.setItem('profile', JSON.stringify(dataFromAPI.data))
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('profile')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.replace('/')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    // return new Date().getTime() < expiresAt
    return localStorage.hasOwnProperty('profile')
  }
}
