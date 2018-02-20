<template>
  <div class="background">
     <div class="container">
    <div class="second">
      <div class="circle">
        <img src="@/assets/enora.jpg" class="profil_pic" />
      </div>
      <div class="score">
        <img src="@/assets/silver.svg" class="stars"/><p>{{ secondScore }}</p>
      </div>
    </div>
    <div class="first">
      <div class="circle circleCenter">
        <img :src="imagePath" class="profil_pic" />
        <img src="@/assets/crown.svg" class="crown" />
      </div>
      <div class="score">
        <img src="@/assets/gold.svg" class="stars" /><p>{{ firstScore }}</p>
      </div>
    </div>
    <div class="third">
      <div class="circle">
        <img src="@/assets/hugo.jpg" class="profil_pic" />
        </div>
      <div class="score">
        <img src="@/assets/bronze.svg" class="stars"/><p>{{ thirdScore }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'classement',
  props: {
    firstScore: {
      type: String,
      required: true,
    },
    secondScore: {
      type: String,
      required: true,
    },
    thirdScore: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    imagePath() {
      return require('@/assets/julien.jpg');
    }
  },
};
</script>

<style scoped>

 .circle, .circleCenter{
  min-height: 0;
  overflow: visible;
  height: 84%;
  text-align: center;
  position: relative;
}
.circleCenter{
  margin: 0 1em !important;
}
.circleCenter img {
  transform: scale(1.2);
  position: relative;
  bottom: 13%;
}
.crown {
  position: absolute !important;
  top: -35%;
  right: -15%;
}
.score{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3vh;
}
.score p {
  margin-left: 5px;
  margin-bottom: 0;
  font-size: 1.2em;
}
.first, .second, .third {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
}
.background {
  display: flex;
  position: absolute;
  width: 90%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 9.75vh;
  border-radius: 10px 10px 0 0;
  background: #2D1862;
}
.container{
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  bottom: 20%;
  width: 100%;
  height: 150%;
}
.circle .profil_pic{
  height: 80%;
  max-width:100%;
  border-radius: 50%;
  border: 8px solid #2D1862;
}

</style>
