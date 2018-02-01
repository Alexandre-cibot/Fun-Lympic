<template>
  <button class="challengeButton bg_purple_dark" @click="handleClick">
    <img :src="imagePath" class="btnLeft"/>
      <div v-if="!finish" class="name">
        <p>{{currentName}} <span class="points">{{currentPoints}} points</span></p> 
        <p>{{challengerName}} <span class="points">{{challengerPoints}} points</span></p> 
      </div>
      
      <div v-if="finish" class="name">
        <p>{{challengerName}} <br> <span class="points">{{challengerPoints}} points</span></p> 
      </div>
    <img :src="logoPath" class="btnIcone" >
  </button>  
</template>

<script>
export default {
  name: 'ChallengeButton',
  props: {
    finish: {
      type: Boolean,
      required: true
    },
    currentName: {
      type: String,
    },
    currentPoints: {
      type: Number
    },
    challengerName: {
      type: String,
      required: true
    },
    challengerPoints: {
      type: Number,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return{}
  },
  computed: {
    logoPath() {
      switch (this.logo) {
        case 'lose': 
          return require('@/assets/lose.svg');
        break;
        case 'win': 
          return require('@/assets/win.svg');
        break;
        case 'challenge':
          return require('@/assets/challenge.svg');
        break;
        default: 
          console.log('No image found');
        break;
      }
    },
    imagePath() {
      switch (this.image) {
        case 'julien': 
          return require('@/assets/julien.jpg');
        break;
        case 'enora': 
          return require('@/assets/enora.jpg');
        break;
        default: 
          console.log('No image found');
        break;
      }
    }
  },
  methods: {
    handleClick() {
      this.$el.style.opacity = 0.5;
      setTimeout(() => {
        this.$el.style.opacity = 1
      },100)
    }
  }
}
</script>


<style scoped>
.challengeButton {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
  margin-top: 3vh;
  border: none;
  border-radius: 10px;
}

.name {
  flex-grow: 2;
}
.name p{
  letter-spacing: 1.5px;
  font-family: 'myfrida_bold';
  font-size: 1.3em;
  line-height: 1.3em;
  color: white;
  text-align: left;
}
.points {
  font-family: 'myfrida';
  color: rgba(255,255,255,0.6);
  font-size: 0.8em;
  }
.btnIcone {
  height: 40px;
  object-fit: cover;
  width: 40px;
}
.btnLeft {
  border-radius: 50%;
  margin-right: 10px;
  height: 40px;
}
.btnRight {
}

.taint {
  display: block;
  position: absolute;
  background: rgba(130, 177, 255, 0.5);
  border-radius: 100%;
  -webkit-transform: scale(0);
          transform: scale(0);
}
.taint.drop {
  -webkit-animation: ripple 0.65s linear;
          animation: ripple 0.65s linear;
}
@-webkit-keyframes ripple {
  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
            transform: scale(2.5);
  }
}
@keyframes ripple {
  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
            transform: scale(2.5);
  }
}

</style>

