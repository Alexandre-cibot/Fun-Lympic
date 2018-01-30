<template>
    <div class="listClassement">
      <img :src="picture" alt="">
      <h2>{{firstname}}</h2>
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
  background: white;
  height: 8vh;
  width: 90%;
  border-radius: 10px;
  margin: 20px 0 0 5%;
}
.listClassement img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
h2, h3 {
  font-family: 'myfrida_bold', sans-serif;
  font-weight: 100;
  color: #1a6067;
}
h2 {
  width: 60%;
  text-align: left;
}

</style>