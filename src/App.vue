<template>
  <div id="app">
    <router-view
    :auth="auth"
    :authenticated="authenticated">
    </router-view>

    <Sound file="ambiance" />
  </div>
</template>

<script>

// Redirection to Https.
if (location.protocol != 'https:' && !location.origin.includes('localhost') && !location.origin.includes('127.0.0.1') && !location.origin.includes('192.168')) {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

import AuthService from './auth/AuthService';
import Sound from '@/components/Sound';
import store from '@/store';

const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  components: {
    Sound
  },
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated,
    }
  },
  mounted() {
    // Handle redirection after connexion.
    // TODO: use location.hash rather than location.href
    if (window.location.href.includes('/#/access_token')) {
      this.auth.handleAuthentication();
    }

    // Sound muted localstorage
    var sound = JSON.parse(localStorage.getItem('sound'));
    if( sound && sound.muteBy == 'player') {
      store.commit('toggleSoundMute', sound)
    } else if(sound && sound.isMuted && sound.muteBy == 'game') {
      var newSound = {'isMuted' : false, 'muteBy' : 'none'};
      store.commit('toggleSoundMute', newSound);
      localStorage.setItem('sound', JSON.stringify(newSound))
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
