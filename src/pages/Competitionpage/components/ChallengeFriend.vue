<template>
  <div class="">
  <h2 class="challenge" >Lancer un défi à</h2>
    <div v-for="friend in friends" :key="friend.name" class="friendBlock">
      <FriendsButton class="animated hidden" :name="friend.name" :image="friend.picture" :country="friend.country"/>
    </div>
    <h2 class="sport">Choisir un sport</h2>
      <BasicButton class="animated hidden bg_red" title="Athletisme" image="lose" @click="$emit('before')"/>
      <BasicButton style="margin-top:3vh;" class="animated hidden bg_blue" title="Natation Synchronisée" image="win"  />
  </div>
</template>

<script>
import FriendsButton from '@/components/FriendsButton.vue';
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'ChallengeFriend',
  data() {
    return {
      friends: [
        {
          name: "enora",
          picture: require('@/assets/enora.jpg'),
          country: "fr"
        },
      ]
    }
  },
  components: {
    FriendsButton,
    BasicButton
  },
  methods: {
    before(){
      this.$emit('before');
    }
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
h2, p {
  color: #ffffff;
  font-family: 'myfrida_bold', sans-serif;
  font-weight: 100;
  text-align: center;
}
.challenge {
  font-size: 1.2em;  
  text-transform: uppercase;
  padding: 3vh 0px 5vh 0;
}
.sport {
  font-size: 1.2em;  
  margin-top: 9vh;
  text-transform: uppercase;
  padding: 3vh 0px 2vh 0;
}
.friendBlock {
  margin-bottom: 20px;
}
.score {
  font-size: 2.2em;
  margin-bottom: 1vh;
}
.info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  align-items: center;
}
.info-content p {
  font-size: 18px;
  font-family: Arial;
}
.info-content img {
  margin-bottom: 35px;
}
</style>

