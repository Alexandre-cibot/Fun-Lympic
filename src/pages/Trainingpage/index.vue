<template>
<div class="page-wrapper bg_purple_light">
  <Navbar text="S'entraîner" :shopping="true" :money="money" secondBtn="shopping" @goBack="goBack"/>
  <div class="wrapper">
    <div class="scroll_card">
      <Card class="animated card hidden" text="Cours Forrest" image="athletisme" :score="65" background="red" @click="runAthletismeGame" />
      <Card class="animated card hidden" text="Flash dance" image="swimming" :score="123" background="blue" @click="runSwimmingGame" />
      <Card class="animated card hidden" text="Le grand bleu" image="grandbleu" :islock="true" background="rose" />
      <Card class="animated card hidden" text="Cool Schwarzy" image="schwarzy" :islock="true" background="yellow" />
      <Card class="animated card hidden" text="La guerre des sabres" image="sabres" :islock="true" background="green" />
      <div class="gutter"></div>
    </div>
    <Classement class="animated classement hidden" firstScore="237" secondScore="183" thirdScore="93" image="@/assets/alex.png"/>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import Classement from '@/components/Classement';
import DidYouKnow from '@/components/DidYouKnow';
import store from '../../store'

export default {
  name: 'Training',
  components: {
    Card,
    Navbar,
    Classement,
  },
  data() {
    return {
      money: 397,
      firstSwimming : true,
    };
  },
  methods: {
    goBack(){
      this.$router.push('/');
    },
    runAthletismeGame () {
      this.$router.push({path: '/athletics'})
    },
    runSwimmingGame(){
        this.$router.push({path: '/swimming'})
    }
  },
  mounted() {
    store.commit('updateGameOrigin', 'entrainement')
    let cards = this.$el.querySelectorAll('.card');
    let classement = this.$el.querySelector('.classement');
     cards.forEach((card, idx) => {
      setTimeout(()=>{
          card.classList.add('zoomIn', 'visible');
      }, idx * 200)
    })
    setTimeout(()=>{
      classement.classList.add('fadeInUp', 'visible')
    }, 400)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page-wrapper {
  height: 100vh;
}
.scroll_card {
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  padding-bottom: 1vh;
}

/* Remove the scrollbar  */
.scroll_card::-webkit-scrollbar { width: 0 !important }

.wrapper {
  overflow: hidden;
  height: calc(100% - 13vh);
  padding-top: 3vh;
}
h2, p {
  font-family: 'Roboto';
  font-weight: 100;
  text-align: center;
  padding: 0;
  margin: 0;
}
.gutter:before{
  content: '';
  position: relative;
  display: block;
  width: 15vw;
  height: 1px;
}
h2 {
  font-size: 1.1em;
  text-transform: uppercase;
}
p {
  margin-top: 0;
}
.score {
  font-size: 2.2em;
  margin-bottom: 1vh;
}
</style>
