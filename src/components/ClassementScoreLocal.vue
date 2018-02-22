<template>
  <div :class="['list_classement', {'bg_white' : today}]" >
    <h2>{{date}}</h2>
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
    today: {
      type: Boolean,
      required: false,
      default: false
    },
    date: {
      type: String,
      required: true,
    }, 
    medal: {
      type: Boolean,
      required: false,
      default: false
    },
    points: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.list_classement, .list_score {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #2D1862;
  height: 10vh;
  width: 90%;
  border-radius: 15px;
  margin: 10px 0 0 5%;
}
.list_score {
  width: 100%;
  margin:auto;
  margin-top: 2vh;
}
.list_classement img, .list_score img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.list_classement div .medal, .list_score div .medal {
  height: 40%;
  width: 70%;
  border-radius: 0;
  padding-right: 10px;
}
.classement {
  color: #FFFEFA;
  opacity: .4;
  padding-left: 2vh;
}
.bg_white {
  background: white;
}
.bg_white h3, .bg_white p, .bg_white h2 {
  color: #2D1862;
  opacity: 1;
}
.medal_div {
  position: absolute;
  right: 20%;
  margin-right: 10px;
}
.classement_name {
  font-size: 0.8em;
}
.profil_pic {
  margin-right: 3vw;
}
h2, h3 {
  font-weight: 100;
}
h3 {
  font-size: 1.4em;
}
h2 {
  font-size: 0.9em;
  letter-spacing: 1px;
  width: 60%;
  text-align: left;
}
</style>