<template>
  <div class="">
  <h2>Lancer un défi à</h2>
    <div v-for="friend in friends" :key="friend.name" class="friendBlock">
      <FriendsButton class="animated hidden" :name="friend.name" :image="friend.picture" :country="friend.country"/>
    </div>
    <h2 class="sport">Choisir un sport</h2>
      <BasicButton class="animated hidden" title="Athletisme" image="play" btnColor="red"  />
      <BasicButton class="animated hidden" title="Natation Synchronisée" image="play" btnColor="blue"  />
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
h2 {
  font-size: 1.2em;  
  text-transform: uppercase;
  padding-bottom: 1vh;
  margin-bottom: 3vh;
}
.friendBlock {
  margin-bottom: 20px;
}
.score {
  font-size: 2.2em;
  margin-bottom: 1vh;
}
.sport {
  margin-top: 15vh;
}
.info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6
  0vh;
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

