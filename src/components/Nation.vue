<template>
  <div class="container" @click.self="closeModal">
    <div class="know">
      <div class="title">
        <img src="@/assets/nation.png" alt="" class="title_img">
      </div>
      <p>Quel pays souhaites-tu représenter ?</p>
      <form action="">
        <div class="flag">          
          <input type="radio" name="flag" value="france" id="france">
          <label for="france"><img src="@/assets/flag/france.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="uk" id="uk"> 
          <label for="uk"><img src="@/assets/flag/uk.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="netherland" id="netherland"> 
          <label for="netherland"><img src="@/assets/flag/netherland.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="usa" id="usa">
          <label for="usa"><img src="@/assets/flag/usa.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="italy" id="italy">
          <label for="italy"><img src="@/assets/flag/italy.svg" alt=""></label>
        </div>
        <div class="flag">          
          <input type="radio" name="flag" value="greece" id="greece"> 
          <label for="greece"><img src="@/assets/flag/greece.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="france" id="france2"> 
          <label for="france2"><img src="@/assets/flag/france.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan">  
          <label for="japan"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan2">  
          <label for="japan2"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan3">  
          <label for="japan3"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan4">
          <label for="japan4"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan5">  
          <label for="japan5"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan6">  
          <label for="japan6"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan7">
          <label for="japan7"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan8">
          <label for="japan8"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
        <div class="flag">
          <input type="radio" name="flag" value="japan" id="japan9">
          <label for="japan9"><img src="@/assets/flag/japan.svg" alt=""></label>
        </div>
      </form>
      <button class="BasicButton" @click="chooseFriends">
        Valider
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nation',
  props: {
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
  },
  methods: {
    chooseFriends () {
      this.$emit('chooseFriends')
    },
    closeModal () {
      this.$emit('closeModal')
    }
  }
};
</script>
<style scoped>
.BasicButton {
  border: none;
  text-transform: uppercase;
  font-family: 'myfrida-bold', sans-serif;
  width: 70%;
  box-shadow: 0px 6px 0px 0px #F1B946;
  background-color: #FFD360;
  font-size: 1.3em;
  letter-spacing: 1.5px;
  min-height: 8vh;
  border-radius: 10px;
  color: white;
  margin: auto;
}
form {
  width: 80%;
  margin-left: 15%;
}
.flag {
  display: inline-block;
  position: relative; 
  width: 20%;
  margin-top: 5vh;
}
.dis {
  display: none;
}
input[type="radio"]{
  position: relative;
}
input[type="radio"]:checked+label {
  border: 3px solid #F7BE51;
}
label img {
  box-sizing: border-box;
}
label{
  position: absolute;
  z-index: 1;
  bottom: 0;
  height: 28px;
  border-radius: 3px;
  left: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
}
.know {
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 80%;
  height: 70vh;
  background: white;
  border-radius: 10px;
  z-index: 30;
}
.title{
  position: absolute;
  display: block;
  width: 122%;
  left: -11%;
  top: 2vh;
  margin: auto;
}
.title_img {
  width: 100%;
}
.content_img{
  width: 56%;
  margin: 0 auto;
  margin-top: 25%;
  height: auto;
}
.bottom_img {
  position: absolute;
  bottom: -6vw;
  width:12vw;
  left: calc(50% - 6vw);
  margin: auto;
}
p {
  font-family: 'myfrida_bold', sans-serif;
  text-align: center;
  line-height: 1.5em ;
  font-size: 0.9em;
  color: #493B35;
  margin-top: 14vh;
}
</style>