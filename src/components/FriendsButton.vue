<!--
Exemple pour apeller ce composant : 
<B title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="BasicButton btnYellow">
    <img v-if="image" :src="imagePath" alt="" class="btn-fLeft btn-icone">
    <p class="btn-fRight btn-title">
      {{name}}
    </p>
  </button>
</template>

<script>
export default {
  name: 'FriendsButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  },
  computed: {
    imagePath() {
      switch(this.image) {
        case 'enora': 
          return require('@/assets/enora.jpg');
        break;
        default:
          console.log('no image default found.');
        break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  

  .BasicButton {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px 30px;
    max-height: 65px;
  }
  .BasicButton p {
    font-family: 'myfrida', sans-serif;
    margin: 0;
  }
  .btnYellow {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #f0e2c5;
    background-color: #fcf1db;
  }
  .btn-fLeft {
    float:left;
  }
  .btn-Right {
    float:right;
  }
  .btn-title {
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    font-family: 'myfrida', sans-serif;
  }
  .btn-icone {
    height: 30px;
    width: auto;
    padding-right:10px;
    border-radius: 50%;
    border: 2px solid white; 
  }
</style>
