<template>
  <div id="app">
    <router-view
    :auth="auth" 
    :authenticated="authenticated">
    </router-view>
  </div>
</template>

<script>

// Redirection to Https.
if (location.protocol != 'https:' && !location.origin.includes('localhost') && !location.origin.includes('127.0.0.1') && !location.origin.includes('192.168')) {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

import AuthService from './auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  mounted() {
    // Handle redirection after connexion.
    if (window.location.href.startsWith('https://jo-games.netlify.com/#/access_token') || window.location.href.startsWith('http://localhost:3000/#/access_token')) {
      this.auth.handleAuthentication();
    }
  },
  methods: {
    login,
    logout
  }
};
</script>

<style>
@import './css/vendor/reset.css';
@import './css/main.css';


#app {
  height: 100vh;
}
</style>
