<template>
  <div class="card" @click="click">
    <h3>{{text}}</h3>
    <img :src="imagePath" />
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    text: {
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
      switch (this.image) {
        case 'athletisme': 
          return require('@/assets/escrime.png');
        break;
        default: 
          console.log('No default found');
        break;
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  background: #F7BE51;
  border-radius: 20px;
  height: 50vh;
  z-index: 20;
  width: 75%;
  margin: auto;
  box-shadow: 0px 8px 0px 0px rgba(192,144,51,1);
}
.card:before {
  /* content: "";
  transform: rotate(-52deg) translateX(-20px) translateY(100px);
  z-index:0;
  position: absolute;
  height: 100%;
  width: 162%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.04); */
}
img{
  display: block;
  position: relative;
  width: 60%;
  margin: auto;
}
h3{
  padding: 15px;
  font-size: 1.5em;
  font-family: 'Helvetica';
  font-weight: 100;
  text-align: center;
  background: #DCA233;
  color: white;
  text-transform: uppercase;
}
</style>