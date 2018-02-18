<template>
<div class="background">
  <div class="wrapper">
    <div class="game-title">
      <p>Fun'lympics Games</p>
    </div>
    <!-- <DidYouKnow :show="show" image="athletisme" @closeModal="closeModal" /> -->
      <div class="select-category">
          <BasicButton class="animated mainButton hidden" title="Jouer" btnColor="yellow" btnSize="big" image="play" @click="goTrainingPage"/>
          <BasicButton class="animated mainButton hidden" style="margin-top:3vh;" title="Compétitions" btnColor="yellow" btnSize="big" image="olympique" @click="goCompetition"/>
      </div>

      <div class="other-buttons animated hidden">
        <button @click="goParameterPage">
          <img src="@/assets/first.svg" alt="">
        </button>
        <button>
          <img src="@/assets/second.svg" alt="">
        </button>
        <button @click="goClassementPage">
          <img src="@/assets/third.svg" alt="">
        </button>
        <button @click="goCharacterPage">
          <img src="@/assets/fourth.svg" alt="">
        </button>
        <button>
          <img src="@/assets/fiveth.svg" alt="">
        </button>
      </div>

  </div>
</div>
</template>

<script>
import BasicButton from '@/components/BasicButton';
import DidYouKnow from '@/components/DidYouKnow';

export default {
  name: 'Homepage',
  components: {
    BasicButton,
    DidYouKnow
  },
  data() {
    return {
      msg: 'test',
      show: true,
    };
  },
  methods: {
    closeModal () {
      this.show = false;
    },
    goCharacterPage(){
      this.$router.push('/character');
    },
    goTrainingPage() {
      this.$router.push('/training');
    },
    goCompetition() {
      this.$router.push('/competition');
    },
    goParameterPage() {
      this.$router.push('/parameter');
    },
    goClassementPage() {
      this.$router.push('/classement');
    }
  },
  mounted() {
    let mainButtons = this.$el.querySelectorAll('.mainButton');
    let otherButtons = this.$el.querySelector('.other-buttons');
    mainButtons.forEach((button, idx) => {
      setTimeout(()=>{
          button.classList.add('bounceInDown', 'visible');
          if (idx === 1) {
            // Launch animation of the nav buttons
            setInterval(()=>{
              otherButtons.classList.add('fadeInUp', 'visible');
            },400)
          }
      }, idx * 200)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  height: 100%;
  width: 100%;
  background: url('../../assets/bakground.png');
  background-size: cover;
  background-position: center;
}
.wrapper{
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
}
.game-title {
  flex-grow: 4;
  flex-shrink: 7;
  display: flex;
  align-items: top;
  padding-top: 20px;
  justify-content: center;
  text-align: center;
  font-size: 54px;
  text-shadow: -3px 1px 4px rgba(255, 255, 255, 1);
}
.game-title p {
  color: #2AD4E2;
}
.select-category {
  display: flex;
  flex-direction : column;
  width: 85%;
  align-items: center;
  margin-bottom: 6vh;
}
.other-buttons {
  display:flex;
  flex-direction: row;
  margin-bottom: 4vh;
  flex-shrink: 1;
}
.other-buttons button {
  height: 55px;
  background-color: transparent;
  border: none;
}
.other-buttons button img {
  height: 120%;
  width: 120%;
}
.other-buttons button:nth-child(3) img {
  height: 150%;
  width: 150%;
  margin-left: -1.1em;
  margin-top: -1em;
}
.other-buttons button:nth-child(1) img, .other-buttons button:nth-child(2) img {
  margin-left: -1em;
}


</style>
