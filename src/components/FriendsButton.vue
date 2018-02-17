<!--
Exemple pour apeller ce composant : 
<B title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="bg_purple_dark">
    <div>
      <img v-if="image" :src="image" alt="" class="btn-fLeft btn-icone">
      <p class="btn-fRight btn-title">
        {{name}}
      </p>
    </div>
    <div>
      <img :src="flagPath" class="country_flag">
    </div>
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
    country: {
      type: String,
      required: true,
      default: "fr"
    }
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
    flagPath() {
      switch(this.country) {
        case 'fr': 
          return require('@/assets/flag/France.png');
        break;
        case 'italy': 
          return require('@/assets/flag/Italie.png');
          break;
        case 'uk':
          return require('@/assets/flag/Royaume-Uni.png');
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
  .country_flag {
    margin-right: 3vw;
  }
  button div {
    display: flex;
    align-items: center;
  }
  button {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    border: none;
    border-radius: 10px;
  }
  button p {
    color: #ffffff;
    font-family: 'myfrida_bold', sans-serif;
    display: inline-block;
    margin: 0;
  }
  .btn-title {
    letter-spacing: 1.5px;
    margin-left: 4vw;
    font-size: 1.5em;
    text-transform: uppercase;
    font-family: 'myfrida_bold', sans-serif;
  }
  .btn-icone {
    border-radius: 50%;
    margin-left: 3vw;
    height: 45px;
  }
</style>
