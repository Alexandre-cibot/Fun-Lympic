<template>
  <div class="background">
     <div class="container">
    <div class="second">
      <div class="circle">
        <img src="../assets/enora.jpg" />
      </div>
      <div class="score">
        <img src="../assets/stars_black.png" class="stars"/><p>{{ secondScore }}</p>
      </div>
    </div>
    <div class="first">
      <div class="circle circleCenter">
        <img :src="imagePath" />
        </div>
      <div class="score">
        <img src="../assets/stars_black.png" class="stars" /><p>{{ firstScore }}</p>
      </div>
    </div>
    <div class="third">
      <div class="circle">
        <img src="../assets/hugo.jpg" />
        </div>
      <div class="score">
        <img src="../assets/stars_black.png" class="stars"/><p>{{ thirdScore }}</p>
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
      return require('../../assets/julien.jpg');
    }
  },
  // computed: {
  //   imagePath() {
  //     switch (this.image) {
  //       case 'hugo': 
  //         return require('../assets/hugo.png');
  //       break;
  //       case 'julien': 
  //         return require('../assets/julien.png');
  //       break;
  //       case 'enora': 
  //         return require('../assets/enora.png');
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
  height: 100%;
  width:100%;
  text-align: center;
  margin-bottom: 10px;
}
.circleCenter{
  height: 100%;
  overflow: visivle;
  transform: scale(1.3);
}

.circleCenter img {
  position: absolute;
  left: 0;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
}
.score{
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.stars {
  float: left; 
  display: inline-block;
}
p {
  display: inline-block;
}
.first, .second, .third {
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: space-evenly;
  font-family: Roboto;
  width: 100%;
}
.background {
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
  flex-direction: row;
  position: absolute;
  bottom: 20%;
  width: 100%;
  height: 150%;
  border-radius: 20px 20px 0 0;
  transform: translateX(-50%);
  left: 50%;
  justify-content: space-evenly;
  margin-bottom: 0px;
}
.circle img, .circleCenter img{
  width:auto;
  height: calc(100% - 8px);
  /* border: 1px solid green; */
  border-radius: 50%;
  border: 8px solid white;
}
</style>