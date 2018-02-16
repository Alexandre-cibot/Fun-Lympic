<template>
  <div class="character">
    <h3>{{name}}</h3>
    <img :src="picture" alt=""/>  
    <div class="money">
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
    }
  },
  methods:{

  }
}
</script>
<style scoped>
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
.money img {
  transform: scale(1.3);
  padding: 1vh;
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
  font-family:"myfrida-bold";
  font-size: 1.9em;
  letter-spacing: 1.5px;
}
</style>

