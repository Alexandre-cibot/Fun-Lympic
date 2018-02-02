<template>
    <div class="listClassement">
      <img :src="picture" alt="">
      <h2>{{firstname}}</h2>
        <div v-if="medal" class="medal_div">
          <img src="@/assets/medal.svg" alt="" class="medal">
        </div>
      <h3>{{points}}</h3>
    </div>
</template>

<script>

export default {
  name: 'ClassementFriends',
  props: {
    firstname: {
      type: String,
      required: true,
    }, 
    picture: {
      type: String,
      required: true,
    },
    medal: {
      type: Boolean,
      required: false,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.listClassement {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #2D1862;
  height: 10vh;
  width: 90%;
  border-radius: 10px;
  margin: 10px 0 0 5%;
}
.listClassement img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.listClassement div .medal {
  height: 40%;
  width: 70%;
  border-radius: 0;
  padding-right: 10px;
}
.medal_div {
  position: absolute;
  right: 20%;
  margin-right: 10px;
}
h2, h3 {
  font-family: 'myfrida_bold', sans-serif;
  font-weight: 100;
  color: white;
}
h3 {
  font-size: 1.4em;
  padding-right: 20px;
}
h2 {
  font-size: 0.9em;
  letter-spacing: 1px;
  width: 60%;
  text-align: left;
}
</style>