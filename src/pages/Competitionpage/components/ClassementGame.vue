<template>
  <div class="classement">
    <h2>Classement de tes amis</h2>
    <div class="list">
      <div v-for="(friend, i) in friends" :key="friend.firstname">
        <div v-if="i == 0">
          <ClassementFriends class="animated hidden" :firstname="friend.firstname" :picture="friend.picture" :medal="true" :points="friend.points"/>
        </div>
        <ClassementFriends class="animated hidden" :firstname="friend.firstname" :picture="friend.picture" :points="friend.points"/>
      </div>
    </div>
  </div>
</template>

<script>
import ClassementFriends from '@/components/ClassementFriends.vue';

export default {
  name: 'ClassementGame',
  data() {
    return {
      friends: [
        {
          firstname: "Enora",
          points: 250,
          picture: require('@/assets/enora.jpg'),
        },
        {
          firstname: "Julien",
          points: 200,
          picture: require('@/assets/julien.jpg'),
        },
        {
          firstname: "Enora",
          points: 170,
          picture: require('@/assets/enora.jpg'),
        },
        {
          firstname: "Julien",
          points: 150,
          picture: require('@/assets/julien.jpg'),
        },
                {
          firstname: "Enora",
          points: 120,
          picture: require('@/assets/enora.jpg'),
        },
        {
          firstname: "Julien",
          points: 100,
          picture: require('@/assets/julien.jpg'),
        },
      ]
    }
  },
  components: {
    ClassementFriends
  },
  mounted() {
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        btn.classList.add('slideInRight', 'visible')
      }, idx * 200)
    })
  }
}
</script>

<style scoped>
h2 {
  font-weight: 100;
  text-align: center;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 3vh;
  padding-bottom: 2vh;
}
.list {
  max-height: 53vh;
  margin: 0;
  overflow: scroll;
}
.classement  {
  position: absolute;
  left: 0;
  right: 0;
  width: 90%;
  margin-left: 5%;
  bottom: 0;
  height: 60vh;
  background: #412880;
  border: 2px solid #2D1862;
  border-radius: 15px 15px 0 0;
}
.friendBlock {
  margin-bottom: 20px;
}
</style>

