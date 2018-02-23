<template>
  <div :class="[classement ? 'list_score' : 'list_classement', {'bg_white' : owner}]" >
    <h3 v-show="classement" class="classement">{{classement}}</h3>
    <div class="nation_score">
      <h2 :class=" classement ? 'classement_name' : 'classement_home'" >{{name}}</h2>
      <p class="moyenne">{{Math.round(moyenne)}}</p>
    </div>
    <div v-show="nation.country">
      <img :src="imagePath" alt="" class="flag">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ClassementNation',
  props: {
    nation: {
      type: Object,
      required: true,
    },
    classement: {
      type: Number,
      required: false
    },
    owner: {
      type: Boolean,
      required: false
    },
  },
  data() {
    return {};
  },
  computed:{
    moyenne(){
      if(this.nation.moyenne !== null){
        return this.nation.moyenne
      }else{
        return 0
      }
    },
    name(){
      switch(this.nation.country) {
          case 'fr-FR':
            return 'France'
          break;
          case 'es_ES':
            return 'Espagne'
          break;
          case 'en_US':
            return 'Etats-Unis';
          break;
          case 'ru_RU':
            return 'Russie';
          break;
          case 'it_IT':
            return 'Italie';
          break;
          case 'ja_JP':
            return 'Japon';
          break;
          case 'pt_PT':
            return 'Portugal';
          break;
          case 'fr_CA':
            return 'Canada';
          break;
          case 'el_GR':
            return 'Grece';
          break;
          case 'zh_CN':
            return 'Suisse';
          break;
          case 'en_GB':
            return 'Royaume-Uni';
          break;
          case 'de_DE':
            return 'Allemagne';
          break;
          default:
            console.log('no image default found.');
          break;
      }
    },
    imagePath(){
        switch(this.nation.country) {
          case 'fr-FR':
            return require('@/assets/flag/France.png');
          break;
          case 'es_ES':
            // return require('@/assets/olympique.png');
            return require('@/assets/flag/Espagne.png');
          break;
          case 'en_US':
            // return require('@/assets/facebook.png');
            return require('@/assets/flag/Etats-Unis.png');
          break;
          case 'ru_RU':
            return require('@/assets/flag/Russie.png');
          break;
          case 'it_IT':
            return require('@/assets/flag/Italie.png');
          break;
          case 'ja_JP':
            return require('@/assets/flag/Japon.png');
          break;
          case 'pt_PT':
            return require('@/assets/flag/Portugal.png');
          break;
          case 'fr_CA':
            return require('@/assets/flag/Canada.png');
          break;
          case 'el_GR':
            return require('@/assets/flag/Grece.png');
          break;
          case 'zh_CN':
            return require('@/assets/flag/Suisse.png');
          break;
          case 'en_GB':
            return require('@/assets/flag/Royaume-Uni.png');
          break;
          case 'de_DE':
            return require('@/assets/flag/Allemagne.png');
          break;
          default:
            console.log('no image default found.');
          break;
      }
    }
  }
};
</script>
<style scoped>
.list_classement, .list_score {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #2D1862;
  height: 15vh;
  width: 90%;
  border-radius: 15px;
  margin: 10px 0 0 5%;
}
.list_score {
  width: 100%;
  margin:auto;
  margin-top: 2vh;
}
.list_classement img, .list_score img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.list_classement .flag, .list_score .flag {
  border-radius: 0%;
  padding-right: 6vw;
  height: 3.5vh;
}
.list_classement div .medal, .list_score div .medal {
  height: 40%;
  width: 70%;
  border-radius: 0;
  padding-right: 10px;
}
.classement {
  color: #FFFEFA;
  opacity: .4;
  padding-left: 2vh;
}
.bg_white {
  background: white;
}
.bg_white h3, .bg_white p, .bg_white h2 {
  color: #2D1862;
  opacity: 1;
}
.medal_div {
  position: absolute;
  right: 20%;
  margin-right: 10px;
}
.classement_name {
  font-size: 1.5em;
}
.profil_pic {
  margin-right: 3vw;
}
h2, h3 {
  font-weight: 100;
}
h3 {
  font-size: 1.4em;
  padding-right: 20px;
}
h2 {
  font-size: 1.5em;
  letter-spacing: 1px;
  text-align: left;
}
.nation_score {
  width: 100%;
}
.moyenne {
  font-size: 1em;
  margin-top: 5px;
  opacity: 0.4;
}
</style>
