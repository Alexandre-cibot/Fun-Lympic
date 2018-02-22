<template>
  <div class="challengeFriend">
  <h2 class="challenge" >Lancer un défi à</h2>
      <FriendsButton class="animated hidden" :name="challenger.given_name" :image="challenger.picture" :country="challenger.country"/>
    <h2 class="sport">Choisir un sport</h2>
      <BasicButton class="animated hidden bg_red" title="Athletisme" image="lose" @click="$emit('before')"/>
      <BasicButton class="animated hidden bg_blue" title="Natation Synchronisée" image="win" style="margin-top:3vh;" @click="$emit('before')"/>
  </div>
</template>

<script>
import FriendsButton from '@/components/FriendsButton.vue';
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'ChallengeFriend',
  props: ['challenger'],
  data() {
    return {
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
.challengeFriend {
  height: 100%;
}
h2, p {
  color: #ffffff;
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
  padding: 3vh 0px 5vh 0;
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

