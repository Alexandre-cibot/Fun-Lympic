<!--
Exemple pour apeller ce composant : 
<B title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="BasicButton btnYellow">
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
          return require('@/assets/flags/flag_fr.png');
        break;
        case 'italy': 
          return require('@/assets/flags/flag_italy.png');
          break;
        case 'uk':
          return require('@/assets/flags/flag_uk.png');
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
    display: inline-block;
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
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'myfrida', sans-serif;
  }
  .btn-icone {
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 10px;
    height: 40px;
  }
</style>
