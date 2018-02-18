<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Marcelin" :shopping="true" :money="400" secondBtn="none" @goBack="goBack"/>
    <div class="wrapper">
      <button class="btnYellow">
        <div class="price_free">
          <img src="@/assets/one_jo_coin.png" alt="">
          <p>100</p>
        </div>
        <img src="@/assets/free.png" alt="" class="free">
      </button>
      <div class="wrap_price">
        <div v-for="info in infos" :key="info.index" class="price">
          <ShoppingButton :price="info.price" :picture="info.picture" :promo="info.promo" :coin="info.coin" :percentage="info.percentage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
import ShoppingButton from './components/ShoppingButton';

export default {
  name: "Shopping",
  components: {
    Navbar,
    ShoppingButton,
    BasicButton
  },
  data(){
    return{
      infos:[
        {
          price: "1,10",
          coin: 1500,
          picture: require('@/assets/one_jo_coin.png'),
          promo: false
        },
        {
          price: "3,00",
          coin: 5000,
          picture: require('@/assets/two_jo_coin.png'),
          promo: true,
          percentage: 15 
        },
        {
          price: "7,50",
          coin: 13000,
          picture: require('@/assets/three_jo_coin.png'),
          promo: true,
          percentage: 30
        },
        {
          price: "20,00",
          coin: 50000,
          picture: require('@/assets/four_jo_coin.png'),
          promo: true,
          percentage: 65
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
.btnYellow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 6px 0px 0px #F1B946;
  background-color: #FFD360;
  font-size: 1.7em;
  padding:2vh;
  width: 100%;
  min-height: 8vh;
}
.price_free{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.price_free p {
  font-size: 1.2em;
  padding-left: 2vw;
  letter-spacing: 1.5px;
}
.free{
  margin-right: 2vw;
}
.wrap_price{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.price{
  width: 47%;
  margin-top: 3vh;
}
.wrapper {
  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 20px;
  height: calc(100% - 13vh);
  padding-top: 7vh;
}
.scroll_card::-webkit-scrollbar { width: 0 !important }
.scroll_card{
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  padding-bottom: 1vh;
}
</style>
