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
      break;
      case 'ambiance':
        this.audio = new Audio(require('@/assets/mp3/ambiance.mp3'));
        this.audio.addEventListener('timeupdate', function(){
          if((this.currentTime / this.duration) > 0.95 ){
              this.currentTime = 0
              this.play()
          }
        }, false);
      break;
      case 'artifice':
        this.audio = new Audio(require('@/assets/mp3/artifice.mp3'));
      break;
      case 'bouh':
        this.audio = new Audio(require('@/assets/mp3/bouh.mp3'));
      break;
      default:
      break;
    }

    if(!this.isMuted) {
      this.audio.play();
    }
  }
};
</script>
