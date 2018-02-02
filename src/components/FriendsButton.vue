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
      <img :src="flagPath" alt="country_flag">
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
          return require('@/assets/flag/france.svg');
        break;
        case 'italy': 
          return require('@/assets/flag/italy.svg');
          break;
        case 'uk':
          return require('@/assets/flag/uk.svg');
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
    height: 12vh;
    border: none;
    border-radius: 10px;
    -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
  }
  button p {
    color: #ffffff;
    font-family: 'myfrida_bold', sans-serif;
    display: inline-block;
    margin: 0;
  }
  .btnYellow {
    border: none;
    box-shadow: 0px 8px 0px 0px #f0e2c5;
    background-color: #fcf1db;
  }
  .btn-fLeft {
    float:left;
    padding: 10px;
  }
  .btn-Right {
    float:right;
  }
  .btn-title {
    letter-spacing: 1.5px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'myfrida_bold', sans-serif;
  }
  .btn-icone {
    border-radius: 50%;
    margin-right: 10px;
    height: 45px;
  }
</style>
