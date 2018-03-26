<template>
  <div class="wrapper-page bg_purple_light">
    <div v-for="user in users" :key="user.index">
      <Navbar :text="user.text" :flag="user.image" @goBack="goBack"/>
    </div>
    <div class="wrapper">
      <button class="button_main">
        <button class="left_arr" @click="changeSport">
          <img src="@/assets/left_arr.svg" alt="">
        </button>
        <img src="@/assets/win_white.svg" alt="" class="win">
        <p>{{sport}}</p>
        <button class="right_arr" @click="changeSport">
          <img src="@/assets/right_arr.svg" alt="">
        </button>
      </button>
      <div class="classement_friends">
        <div v-if="flagClassement || planetClassement || facebookClassement"  class="scrollDiv">
          <div v-for="(friend, key) in classement" :key="key" class="classement">
            <ClassementFriends v-if="profile.id.replace('facebook|', '') == friend.userId" :classement="key + 1" :firstname="friend.given_name" :points="friend.score" :flag="friend.flag" :picture="friend.picture" :owner="true" />
            <ClassementFriends v-else :classement="key + 1" :firstname="friend.given_name" :points="friend.score" :flag="friend.flag" :picture="friend.picture" />
          </div>
        </div>
        <div v-else-if="nationsClassement"  class="scrollDiv">
          <div v-for="(nation, key) in nationArray" :key="key" class="classement">
            <ClassementNation v-if="key == 0" :classement="key + 1" :nation="nation" :owner="true" />
            <ClassementNation v-else :classement="key + 1" :nation="nation" />
          </div>
        </div>
        <div v-else>
          <p class="text_friends">Aucun ami ne joue encore à <br/> Fun'lympic :(</p>
          <BasicButton btnColor="blue" btnSize="big" title="Inviter des amis !" image="facebook" @click="facebook"/>
        </div>
      </div>
      <div class="button_bottom">
        <ClassementButton image="facebook"  @click.native="facebook" :class="currentState == 'facebook' ? 'btnYellow' : 'btnBlue'"/>
        <ClassementButton image="flag" @click.native="flag" :class="currentState == 'flag' ? 'btnYellow' : 'btnBlue'"/>
        <ClassementButton :image="currentState == 'planet' ? 'planet_active' : 'planet'" @click.native="planet" :class="currentState == 'planet' ? 'btnYellow' : 'btnBlue'"/>
        <ClassementButton image="nations" @click.native="nations" :class="currentState == 'nations' ? 'btnYellow' : 'btnBlue'"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API from '@/api/index.js'

import Navbar from '@/components/Navbar';
import ClassementFriends from '@/components/ClassementFriends';
import ClassementNation from '@/components/ClassementNation';
import ClassementButton from '@/components/ClassementButton';
import BasicButton from '@/components/BasicButton';

export default {
  name: 'Classement',
  components: {
    ClassementFriends,
    ClassementButton,
    ClassementNation,
    BasicButton,
    Navbar
  },
  data(){
    return{
      profile : JSON.parse(localStorage.getItem('profile')),
      currentState: 'facebook',
      classement: '',
      facebookClassement : true,
      flagClassement : false,
      planetClassement : false,
      nationsClassement : false,
      sport : "Cours Forrest",
      users : [
        {
          text: "Classement",
          image : require('@/assets/flag/France.png')
        }
      ]
    }
  },
  mounted(){
    API.getFacebookAthletics(this.profile.id)
    .then((response)=>{
      this.classement = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  methods: {
    changeSport(){
      if(this.sport == "Cours Forrest"){
        this.sport = "Flash Dance";
      }else {
        this.sport = "Cours Forrest";
      }
      if(this.flagClassement){
        this.classement = this.flag();
      }else if(this.facebookClassement){
        this.classement = this.facebook();
      }else if(this.planetClassement){
        this.classement = this.planet();
      }else if(this.nationsClassement){
        this.classement = this.nations();
      }
    },
    facebook(){
      if(this.sport == "Cours Forrest"){
        API.getFacebookAthletics(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }else{
        API.getFacebookSwimming(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      this.currentState = `facebook`;
      this.flagClassement = false;
      this.facebookClassement = true;
      this.planetClassement = false;
      this.nationsClassement = false;
    },
    flag(){
      if(this.sport == "Cours Forrest"){
        API.getCountryAthletics(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }else{
        API.getCountrySwimming(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      this.currentState = `flag`;
      this.flagClassement = true;
      this.facebookClassement = false;
      this.planetClassement = false;
      this.nationsClassement = false;
    },
    planet(){
      if(this.sport == "Cours Forrest"){
        API.getPersoWorldAthletics(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }else{
        API.getPersoWorldSwimming(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      this.currentState = `planet`;
      this.flagClassement = false;
      this.facebookClassement = false;
      this.planetClassement = true;
      this.nationsClassement = false;
    },
    nations(){
      if(this.sport == "Cours Forrest"){
        API.getWorldAthletics(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }else{
        API.getWorldSwimming(this.profile.id)
        .then((response)=>{
          this.classement = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }  
      this.currentState = `nations`;
      this.flagClassement = false;
      this.facebookClassement = false;
      this.planetClassement = false;
      this.nationsClassement = true;
    },
    goBack(){
      this.$router.push('/');
    }
  },
  computed: {
    friendsArray () {
      if(this.currentState == 'facebook'){
        this.array = this.classement;
      } else if (this.currentState == 'flag') {
        this.array = this.classement;
      } else if (this.currentState == 'planet'){
        this.array = this.classement;
      } else if (this.currentState == 'nations'){
        this.array = this.classement;
      }

      function compare(a, b) {
        if (a.score > b.score)
          return -1;
        if (a.score < b.score)
          return 1;
        return 0;
      }
      return this.array.sort(compare);
    },

    nationArray() {
      if(this.currentState == 'nations') {
        this.array = this.classement;
      }
      return this.array.sort((a,b) => { if(a.moyenne > b.moyenne) return -1; if(a.moyenne < b.moyenne) return 1; return 0 } )
    }
  },
}
</script>

<style scoped>
.wrapper-page {
  height: 100vh;
  width: 100%;
}
.btnYellow {
    background: #F9C947;
    box-shadow: 0px 4px 0px 0px #D8AD41;
}
.btnBlue{
  background: #57C9D7;
  box-shadow: 0px 4px 0px 0px #10B2C0;
}
.scrollDiv {
  position: absolute;
  top: 0;
  width: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: calc(100% - 13vh);
  padding: 0 30px;
  padding-top: 3vh;
  background: #513092;
}
.button_main {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 9vh;
  width: 100%;
  background: #FFD360;
  border: none;
  border-radius: 10px;
  margin-bottom: 3vh;
}
.left_arr img, .right_arr img {
  height: 30%;
}
.left_arr, .right_arr{
  position: absolute;
  padding: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  z-index: 1;
}
.left_arr {
  left: 5px;
}
.right_arr {
  right: 5px;
}
.button_main p {
  font-size: 2em;;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-left: 5px;
}
.classement_friends {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 60vh;
  overflow: scroll;
  width: 100%;
}
.text_friends{
  text-align: center;
  margin-bottom: 5vh;
  letter-spacing:1px;
  line-height: 1.5em;
}
.win {
  height: 70%;
  width: 13vw;
}
.button_bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-around ;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 3vh;
}
</style>
