<template>
  <div class="classement">
    <h2>Classement de tes amis</h2>
    <div class="list">
      <div v-for="friend in friends" :key="friend.firstname">
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
          points: 120,
          picture: require('@/assets/enora.jpg'),
        },
        {
          firstname: "Julien",
          points: 100,
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
  font-family: 'myfrida', sans-serif;
  font-weight: 100;
  text-align: center;
}
h2 {
  font-size: 1.2em;  
  text-transform: uppercase;
  color: white;
  margin-top: 3vh;
  padding-bottom: 1vh;
  margin-bottom: 3vh;
}
.list {
  max-height: 40vh;
  margin: 0;
  overflow: scroll;
}
.classement  {
  position: absolute;
  left: 0;
  right: 0;
  width: 80%;
  margin-left: 10%;
  bottom: 0;
  height: 50vh;
  background: #1c879a;
  border: 2px solid #1a6067;
  border-radius: 15px 15px 0 0;
}
.friendBlock {
  margin-bottom: 20px;
}
</style>

