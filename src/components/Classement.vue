<template>
  <div class="background">
     <div class="container">
    <div class="second">
      <div class="circle">
        <img src="@/assets/enora.jpg" class="profil_pic" />
      </div>
      <div class="score">
        <img src="@/assets/two_stars.svg" class="stars"/><p>{{ secondScore }}</p>
      </div>
    </div>
    <div class="first">
      <div class="circle circleCenter">
        <img :src="imagePath" class="profil_pic" />
        </div>
      <div class="score">
        <img src="@/assets/three_stars.svg" class="stars" /><p>{{ firstScore }}</p>
      </div>
    </div>
    <div class="third">
      <div class="circle">
        <img src="@/assets/hugo.jpg" class="profil_pic" />
        </div>
      <div class="score">
        <img src="@/assets/star.svg" class="stars"/><p>{{ thirdScore }}</p>
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
  height: 90%;
  text-align: center;
}
.circleCenter{
  margin: 0 10px !important;
}
.circleCenter img {
  transform: scale(1.2);
  position: relative;
  bottom: 13%;
}
.score{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3vh;
  width: 3vh;
}
.stars {
  margin-bottom: 5px;
  height: 100%;
}
.score p {
  margin-left: 5px;
  margin-bottom: 0;
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
  width: 80%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 10vh;
  border-radius: 20px 20px 0 0;
  background: #2D1862;
}
.container{
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  bottom: 20%;
  width: 100%;
  height: 160%;
}
.circle .profil_pic{
  height: 80%;
  max-width:100%;
  border-radius: 50%;
  border: 8px solid #2D1862;
} 

</style>