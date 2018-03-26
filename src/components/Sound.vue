<template>
</template>
<script>

import store from '@/store';

export default {
  name: 'Sound',
  props: {
    file: {
      type: String,
      required: true,
    },
  },
  data() {
    return { audio: null }
  },
  watch: {
    isMuted : function(val) {
      if(val) this.audio.pause();
      else this.audio.play();
    }
  },
  computed: {
    isMuted() {
      return store.state.isSoundMuted
    }
  },
  mounted() {
    switch(this.file){
      case 'clic':
        this.audio = new Audio(require('@/assets/mp3/clic.mp3'));
        if(!this.isMuted) {
          this.audio.play();
        }
      break;
      case 'ambiance':
        // playAmbiance()
      break;
      case 'artifice':
        this.audio = new Audio(require('@/assets/mp3/artifice.mp3'));
        if(!this.isMuted) {
          this.audio.play();
        }
      break;
      case 'bouh':
        this.audio = new Audio(require('@/assets/mp3/bouh.mp3'));
        if(!this.isMuted) {
          this.audio.play();
        }
      break;
      default:
      break;
    }

    
  }
};

function playAmbiance () {
  const audio = new Audio(require('@/assets/mp3/ambiance.mp3'));
  audio.volume = 0.2
  audio.loop = true
  audio.play();
  audio.onended = function() {
    playAmbiance()
  };
}


</script>
