<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Paramètres" @goBack="()=>{this.$router.push('/')}"/>
    <div class="wrapper animated slideInRight">
      <div class="block1">
        <div class="sound">
          <h2>SON</h2>
          <BasicButton image="sound" btnColor="yellow" @doAction="()=>{console.log('click')}" />
        </div>
        <div class="music">
          <h2>MUSIC</h2>
          <BasicButton image="music" btnColor="yellow" @doAction="()=>{console.log('click')}" />
        </div>
      </div>
      <div class="block2">
        <h2>LANGUE</h2>
        <div class="langages">
          <div>
            <BasicButton title="ENGLISH" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="ESPAÑOL" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="FRANÇAIS" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="DEUTCH" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="ITALIANO" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="PORTUGUÊS" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="中国" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
          <div>
            <BasicButton title="日本の" btnColor="blue" @doAction="()=>{console.log('click')}" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';

export default {
  name: 'Stade',
  components: {
    Navbar,
    BasicButton
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {
  height: 100%;
  overflow-y: hidden;
}
.wrapper {
  display:block;
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 15vh);
  padding: 0 30px;
  padding-top: 3vh;
  border: 1px solid white;
}
h2 {
  text-transform: uppercase;
  font-family: 'myfrida_bold';
  color: #ffffff;
}
.block1 {
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align:center;
}
.sound, .music {
  display: flex;
  flex-direction:column;
  align-items: center;
}
.langages {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
}
.langages div {
  width: 35vw;
}
.block2 {
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align:center;
}

</style>

