<template>
  <div class="">
  <h2>Lancer un défi à</h2>
  <div v-for="(friend, i) in friends" :key="i" class="friendBlock">
    <FriendsButton class="animated hidden" :name="friend.given_name" :image="friend.picture" :country="friend.country" @click.native="$emit('selectFriend', friend)" />
  </div>
  </div>
</template>

<script>
import FriendsButton from '@/components/FriendsButton.vue';
export default {
  name: 'Friends',
  props: ['friends'],
  data() {
    return {
    }
  },
  components: {
    FriendsButton
  },
  methods: {
    friend(){
      this.$emit('friend');
    }
  },
  mounted() {
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        btn.classList.add('slideInRight', 'visible')
      }, idx * 100)
    })
  }
}
</script>

<style scoped>
h2, p {
  color: #ffffff;
  font-weight: 100;
  text-align: center;
}
h2 {
  font-size: 1.2em;
  text-transform: uppercase;
  padding: 3vh 0px 5vh 0;
}
.friendBlock {
  margin-bottom: 1.5vh;
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

