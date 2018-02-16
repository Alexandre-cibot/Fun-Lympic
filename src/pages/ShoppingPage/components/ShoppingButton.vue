<template>
  <div class="button_blue">
    <div class="container">
      <img :src="picture" alt="">
    </div>
    <h4>{{price}}€</h4>
  </div>
</template>
<script>
export default {
  name: "ShoppingButton",
  props: {
    price:{
      type: Number,
      required: true
    },
    picture: {
      type: String,
      required: true,
    },
    promo:{
      type: Boolean,
      required: true,
    }
  }
}
</script>
<style scoped>
.button_blue{
  width: 50%;
  height: 20vh;
  background: #57C9D7;
  border-radius: 15px;
  box-shadow: 0px 6px 0px 0px #10B2C0;
}
.container{
  width: 80%;
  margin-left: 10%;
  border-radius: 15px;
  background: #10B2C0;
}
</style>
