<template>
  <div class="before">
    <div class="background"></div>
    <div class="circle_first">
      <img src="@/assets/first_circle.svg" alt="" class="circle">
      <img src="@/assets/alex.png" alt="" class="first_character">
    </div>
    <div class="infos">
        <h3>Alexandre</h3><img src="@/assets/french.svg" alt="" class="flag">
      </div>
    <button>
      <img src="@/assets/win_white.svg" alt="" class="icon_button">
      <h2>Jouer</h2>
    </button>
    <div class="circle_second">
      <img src="@/assets/second_circle.svg" alt="" class="circle">
      <img src="@/assets/enora.jpg" alt="" class="second_character">
    </div>
    <div class="infos">
        <h3>Enora</h3><img src="@/assets/french.svg" alt="" class="flag">
      </div>

  </div>
</template>

<script>

export default {
  name: 'BeforeGame',
  data() {
    return {}
  },
  components: {
  },
  methods: {
  },
  mounted() {
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        if (idx === 0) {
          btn.classList.add('slideInRight', 'visible')
        } else {
          btn.classList.add('zoomIn', 'visible')
        }
      }, idx * 200)
    })
  }
}
</script>

<style scoped>
button {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  color : white;
  border-radius: 15px;
  padding: 10px 5px;
  font-size: 1.4em;
  background: #ffd360;
  box-shadow: 0px 8px 0px 0px #F1B946;
  width: 65%;
}
button h2, h3 {
  float: right;
  font-family: 'myfrida_bold';
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 1em;
}
.icon_button {
  float: left;
  height: 6vh;
  padding-left: 10px;
}
.infos {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
}
.infos img {
  display: inline-block;
  height: 3vh;
}
.infos h3 {
  float: left;
  color: white;
  padding-right: 10px;
}
.background{
  position: absolute;
  top: 0;
  height: 50vh;
  width: 100%;
  border-radius: 0 0 30px 30px;
  background: #2d1862;
}
.before {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.circle_first{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
}
.circle_second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
}
.circle {
  height: 20vh;
}
.first_character {
  position: absolute;
  border: 7px solid #a997c9;
  border-radius: 50%;
  height: 11vh;
}
.second_character {
  position: absolute;
  border: 7px solid #a997c9;
  border-radius: 50%;
  height: 11vh;
}
</style>

