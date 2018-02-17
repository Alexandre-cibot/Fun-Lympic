<template>
  <div class="button_blue">
    <div v-if="promo" class="promo">
      <h5>-{{percentage}}%</h5>
    </div>
    <div class="container">
      <img :src="picture" alt="">
      <h5>{{coin}}</h5>
    </div>
    <h4>{{price}}€</h4>
  </div>
</template>
<script>
export default {
  name: "ShoppingButton",
  props: {
    price:{
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true,
    },
    coin:{
      type: Number,
      required: true,
    },
    promo:{
      type: Boolean,
      required: true,
    },
    percentage: {
      type: Number
    }
  }
}
</script>
<style scoped>
.button_blue{
  position: relative;
  width: 100%;
  height: 24vh;
  font-family: 'myfrida-bold';
  text-align: center;
  border-radius: 10px;
  padding: 1px 0 8px 0;
  background: #57C9D7;
  box-shadow: 0px 6px 0px 0px #10B2C0;
  overflow: hidden;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  margin: 10px;
  height: 70%;
  background: #10B2C0;
}
.container h5{
  font-size: 2.2em;
  text-align: center;
  color: white;
}
.button_blue h4{
  color: #24A2AD;
  font-size: 1.4em;
}
.promo{
  position: absolute;
  transform: rotate(33deg);
  top: 2vh;
  right: -6vh;
  padding: 0.5vh;
  background: red;
  width: 100%;
}
.promo h5{
  font-size: 1.2em;
  color: white;
  font-family: 'myfrida-bold';
}
</style>
