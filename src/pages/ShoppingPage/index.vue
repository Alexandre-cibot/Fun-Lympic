<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Marcelin" :shopping="true" :money="400" secondBtn="shopping" @goBack="goBack"/>
    <div class="wrapper">
      <div v-for="info in infos" :key="info.index" >
        <ShoppingButton :price="info.price" :picture="info.picture" :promo="info.promo"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import ShoppingButton from './components/ShoppingButton';

export default {
  name: "Shopping",
  components: {
    Navbar,
    ShoppingButton
  },
  data(){
    return{
      infos:[
        {
          price: 20.00,
          picture: require('@/assets/jo_coin.png'),
          promo: false
        }
      ]
    }
  },
  methods: {
    goBack(){
      window.history.go(-1)
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
