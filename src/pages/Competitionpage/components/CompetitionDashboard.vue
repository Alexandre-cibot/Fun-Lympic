<template>
  <div style="padding-bottom: 3vh;">
      <BasicButton class="challengeBtn animated hidden" title="défier un ami" btnColor="btnYellow" image="facebook" @click="chooseFriends" />
      <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="btnYellow" image="place" />
      <h3 class="animated fadeInUp">Ils te défient</h3>
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="120" btnColor="btnGreen" logo="win" image="julien" :finish="true" />
      <h3 class="animated fadeInUp">Les défis terminés</h3>
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="120" currentName="Véronique" :currentPoints="150" btnColor="btnGreen" logo="win" image="enora" :finish="false" />
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="100" currentName="Véronique" :currentPoints="50" btnColor="btnRed" logo="lose" image="enora" :finish="false"/>
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="100" currentName="Alexandre" :currentPoints="50" btnColor="btnRed" logo="lose" image="enora" :finish="false"/>
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="100" currentName="Jeremy" :currentPoints="50" btnColor="btnRed" logo="lose" image="enora" :finish="false"/>
        <ChallengeButton class="animated hidden" challengerName="Enora" :challengerPoints="100" currentName="Alexandre" :currentPoints="50" btnColor="btnRed" logo="lose" image="enora" :finish="false"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
import ChallengeButton from '@/components/ChallengeButton';

export default {
  name: 'Challengepage',
  components: {
    Navbar,
    BasicButton,
    ChallengeButton
  },
  data() {
    return {
      msg: 'test',
    };
  },
  methods: {
    chooseFriends() {
      this.$emit('chooseFriends');
    }
  },
  mounted() {
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        if ([0,1].includes(idx)) {
          btn.classList.add('slideInLeft', 'visible');
        } else {
          btn.classList.add('slideInRight', 'visible')
        }
      }, idx * 200)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.page-wrapper {
  background: #F5F5F5;
  height: 100vh;
}

h3 {
  text-transform: uppercase;
  font-family: 'myfrida';
  color: #393939;
  margin-top: 5vh;
}
.challengeBtn {
  margin-bottom: 5vh;
}
</style>
