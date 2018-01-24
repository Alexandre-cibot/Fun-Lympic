<template>
    <div class="listClassement">
      <img :src="picture" alt="">
      <h2>{{firstname}}</h2>
      <h3>{{points}}</h3>
    </div>
</template>

<script>

export default {
  name: 'ClassementFriends',
  props: {
    firstname: {
      type: String,
      required: true,
    }, 
    picture: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.listClassement {
  display: flex;
  background: white;
}

</style>