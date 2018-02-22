<template>
  <div class="classement">
    <h2>Tes derniers scores</h2>
    <div class="list">
      <div v-for="(score, i) in history" :key="i">
        <ClassementScoreLocal v-if="i === 0" class="animated hidden" :medal="true" :date="score.date" :points="score.score"/>
        <ClassementScoreLocal v-if="i === 2" class="animated hidden" :today="true" :date="score.date" :points="score.score"/>
        <ClassementScoreLocal v-if="i!==0 && i!==2" class="animated hidden" :date="score.date" :points="score.score"/>
      </div>
    </div>
  </div>
</template>

<script>
import ClassementScoreLocal from '@/components/ClassementScoreLocal.vue';

export default {
  name: 'HistoryScore',
  components: {
    ClassementScoreLocal
  },
  props:['history'],
  data() {
    return {
    }
  },
  mounted() {
    console.log('history', this.history)
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
  z-index: 9999;
  height: 60vh;
  background: #412880;
  border: 2px solid #2D1862;
  border-radius: 15px 15px 0 0;
}
.friendBlock {
  margin-bottom: 20px;
}
</style>

