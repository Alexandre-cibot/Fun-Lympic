<template>
  <div class="background">
     <div class="container">
    <div class="second">
      <div class="circle">
        <img src="@/assets/enora.jpg" />
      </div>
      <div class="score">
        <img src="@/assets/stars_black.png" class="stars"/><p>{{ secondScore }}</p>
      </div>
    </div>
    <div class="first">
      <div class="circle circleCenter">
        <img :src="imagePath" />
        </div>
      <div class="score">
        <img src="@/assets/stars_black.png" class="stars" /><p>{{ firstScore }}</p>
      </div>
    </div>
    <div class="third">
      <div class="circle">
        <img src="@/assets/hugo.jpg" />
        </div>
      <div class="score">
        <img src="@/assets/stars_black.png" class="stars"/><p>{{ thirdScore }}</p>
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
  // computed: {
  //   imagePath() {
  //     switch (this.image) {
  //       case 'hugo': 
  //         return require('@/assets/hugo.png');
  //       break;
  //       case 'julien': 
  //         return require('@/assets/julien.png');
  //       break;
  //       case 'enora': 
  //         return require('@/assets/enora.png');
  //       break;
  //       default: 
  //         console.log('No default found');
  //       break;
  //     }
  //   }
  // }
};
</script>

<style scoped>

 .circle, .circleCenter{
  min-height: 0;
  overflow: visible;
  height: 90%;
  /* width:100%; */
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
  align-items: flex-end;
}
.stars {
  margin-bottom: 5px;
}
.score p {
  margin-left: 5px;
  margin-bottom: 0;
}
.first, .second, .third {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
}
.background {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 84vw;
  height: 10vh;
  border-radius: 20px 20px 0 0;
  background: white;
  transform: translateX(-50%);
  left: 50%;
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
.circle img, .circleCenter img{
  height: 80%;
  border-radius: 50%;
  border: 8px solid white;
} 
</style>