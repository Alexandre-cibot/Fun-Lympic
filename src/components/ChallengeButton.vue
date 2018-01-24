<template>
  <button class="challengeButton" :class="[logo == 'win' ? 'btnGreen' : 'btnRed']" @click="handleClick">
    <img :src="imagePath" class="btnLeft"/>
      <div v-if="!finish" class="name">
        <p>{{currentName}} : <span class="points">{{currentPoints}} points</span></p> 
        <p>{{challengerName}} : <span class="points">{{challengerPoints}} points</span></p> 
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
          return require('@/assets/win.svg');
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
}
.btnRed {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #D76A6A;
    background-color: #FB7C7C;
}
.btnGreen {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #70B281;
    background-color: #88D094;
}
.name {
  flex-grow: 2;
}
.name p{
  font-family: 'myfrida';
  font-size: 1.3em;
  line-height: 1.3em;
  color: white;
  text-align: left;
}
.points {
  font-size: 0.8em;
}
.btnIcone {
  float: right;
  height: 40px;
  width: auto;
}
.btnLeft {
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 10px;
  height: 40px;
  float: left;
}
.btnRight {
  float: right;
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

