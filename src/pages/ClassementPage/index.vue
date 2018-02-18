<template>
  <div class="wrapper-page">
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
          <div v-for="(friend, key) in friendsArray" :key="key" class="classement">
            <ClassementFriends v-if="key == 2" :classement="key + 1" :firstname="friend.firstname" :points="friend.points" :flag="friend.flag" :picture="friend.picture" :owner="true" />
            <ClassementFriends v-else :classement="key + 1" :firstname="friend.firstname" :points="friend.points" :flag="friend.flag" :picture="friend.picture" />
          </div>
        </div>
        <div v-else>
          <p class="text_friends">Aucun ami ne joue encore à <br/> Finger Games :(</p>
          <BasicButton btnColor="blue" btnSize="big" title="Inviter des amis !" image="facebook" @click="facebook"/>
        </div>
      </div>
      <div class="button_bottom">
        <ClassementButton image="facebook"  @click.native="facebook" :class="currentState == 'facebook' ? 'btnYellow' : 'btnBlue'"/>
        <ClassementButton image="flag" @click.native="flag" :class="currentState == 'flag' ? 'btnYellow' : 'btnBlue'"/>
        <ClassementButton image="planet" @click.native="planet" :class="currentState == 'planet' ? 'btnYellow' : 'btnBlue'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import ClassementFriends from '@/components/ClassementFriends';
import ClassementButton from '@/components/ClassementButton';
import BasicButton from '@/components/BasicButton';
export default {
  name: 'Classement',
  components: {
    ClassementFriends,
    ClassementButton,
    BasicButton,
    Navbar
  },
  data(){
    return{
      currentState: '',
      facebookClassement : false,
      flagClassement : false,
      planetClassement : false,
      sport : "Athlétisme",
      users : [
        {
          text: "Classement",
          image : require('@/assets/flag/France.png')
        }
      ],
      friends: [
        {
          firstname: "Enora",
          points: 250,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 200,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Enora",
          points: 170,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 150,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 120,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 100,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 150,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 120,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 100,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
      ],
      friendsFlag: [
        {
          firstname: "Julien",
          points: 290,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 220,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Enora",
          points: 200,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 190,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 170,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 150,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 140,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 130,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 110,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
      ],
      friendsPlanet: [
        {
          firstname: "Julien",
          points: 490,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 380,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Enora",
          points: 360,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 330,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 270,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 250,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 190,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
                {
          firstname: "Enora",
          points: 140,
          picture: require('@/assets/enora.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
        {
          firstname: "Julien",
          points: 110,
          picture: require('@/assets/julien.jpg'),
          flag: require('@/assets/flag/France.png'),
        },
      ]
    }
  },
  methods: {
    changeSport(){
      if(this.sport == "Athlétisme"){
        this.sport = "Natation";
      }else {
        this.sport = "Athlétisme";
      }
    },
    facebook(){
      this.currentState = `facebook`;
      this.flagClassement = false;
      this.facebookClassement = true;
      this.planetClassement = false;
    },
    flag(){
      this.currentState = `flag`;
      this.flagClassement = true;
      this.facebookClassement = false;
      this.planetClassement = false;
    },
    planet(){
      this.currentState = `planet`;
      this.flagClassement = false;
      this.facebookClassement = false;
      this.planetClassement = true;
    },
    goBack(){
      this.$router.push('/');
    }
  },
  computed: {
    friendsArray () {
      if(this.currentState == 'facebook'){
        this.array = this.friends;
      }else if (this.currentState == 'flag') {
        this.array = this.friendsFlag;
      }else {
        this.array = this.friendsPlanet;
      }

      function compare(a, b) {
        if (a.points > b.points)
          return -1;
        if (a.points < b.points)
          return 1;
        return 0;
      }
      return this.array.sort(compare);
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
  width: 80%;
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
  width: 70%;
  margin: auto;
  margin-top: 3vh;
}
</style>
