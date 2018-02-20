<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Marcelin" :shopping="true" :money="money" secondBtn="shopping" @goBack="goBack"/>
    <div class="wrapper">
    <div class="scroll_card">
      <div v-for="(char, index) in characters" :key="char.index" class="character_show">
        <Character :name="char.name" :picture="char.picture" :price="char.price" :bought="char.bought" :selection="char.select" @select="select(index)" @buyThis="buyThis(index)"/>
      </div>
      <div class="add">
        <h3>TTTTTTT</h3>
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
      money:400,
      characters: [
        {
          name: "Teddy",
          picture: require('@/assets/teddy.png'),
          price: 200,
          bought: true,
          select: true
        },
        {
          name: "Le coach",
          picture: require('@/assets/le_coach.png'),
          price: 200,
          bought: false,
          select: false
        },
        {
          name: "Mamie",
          picture: require('@/assets/mamie.png'),
          price: 300,
          bought: false,
          select: false
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
      this.$router.push('/');
    },
    select(i){
      for(let v=0; v<this.characters.length; v++){
        this.characters[v].select=false;  
      }
      this.characters[i].select=true;
    },
    buyThis(i){
      if(this.characters[i].price<this.money){
        this.characters[i].bought = true;
        this.money -= this.characters[i].price;
      }else{
        console.log('c pas possible dsl');
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
.add{
  width: 200px;
  height: 200px;
}
.add h3{
  color: transparent;
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
