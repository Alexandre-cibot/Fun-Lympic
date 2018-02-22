<template>
  <div class="character">
    <h3>{{name}}</h3>
    <img :src="picture" alt=""/>  
    <button v-if="bought && selection">
      <img src="@/assets/tick.png" alt="jo_coin">
    </button>
    <button v-else-if="bought" class="animated" @click="select">
      <h2>Sélectionner</h2>
    </button>
    <div v-else class="money" @click="buyThis">
      <img src="@/assets/jo_coin.png" alt="jo_coin">
      {{price}}
    </div>
  </div>
</template>
<script>
export default {
  name:"CharacterChoose",
  props:{
    picture: {
      type: String,
      required:true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    bought:{
      type: Boolean,
      required: true,
    },
    selection:{
      type: Boolean
    }
  },
  methods:{
    select(){
      this.$emit('select')
    },
    buyThis(){
      this.$emit('buyThis')
    }
  }
}
</script>
<style scoped>
button {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  color : white;
  margin-top: 9vh;
  padding: 2vh;
  font-size: 1.4em;
  background: #ffd360;
  box-shadow: 0px 8px 0px 0px #F1B946;
}
button h2 {
  text-align: center;
}
h3{
  margin-bottom: 5vh;
  text-align: center;  
  font-size: 1.5em;
  letter-spacing: 1.5px;
}
.character{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10vh;
  text-transform: uppercase;
}
.money{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 33vw;
  background: #422881;
  border-radius: 10px;
  margin-top: 9vh;
  padding: 6px;
  color: white;
  font-family:"myfrida_bold";
  font-size: 1.9em;
  letter-spacing: 1.5px;
}
</style>

