<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Marcelin" :shopping="true" :money="400" secondBtn="shopping" @goBack="goBack"/>
    <div class="wrapper">
    <div class="scroll_card">
      <div v-for="char in characters" :key="char.index" class="character_show">
        <Character :name="char.name" :picture="char.picture" :price="char.price" />
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Character from './components/Character';

export default {
  name:"character",
  data(){
    return{
      characters: [
        {
          name: "Teddy",
          picture: require('@/assets/teddy.png'),
          price: 200
        },
        {
          name: "Le coach",
          picture: require('@/assets/le_coach.png'),
          price: 200
        }
      ]
    }
  },
  components:{
    Navbar,
    Character
  },
  methods:{
    goBack(){
      let previousState = this.history[this.history.length-1];
      if (!previousState || this.currentState === 'competitionDashboard') {
        this.$router.push('/')
      } else {
        this.currentState = previousState; // Go to the previous state
        this.history.pop(); // Remove the last one
      }
    }
  }
}
</script>

<style scoped>
.wrapper-page {
  height: 100%;
  overflow-y: hidden;
}
.wrapper {
  display:flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  height: calc(100% - 13vh);
  padding-top: 3vh;
}
.scroll_card::-webkit-scrollbar { width: 0 !important }
.scroll_card{
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  padding-bottom: 1vh;
}
</style>
