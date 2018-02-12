import Phaser from 'phaser'
import WebFont from 'webfontloader'
import constant from './constant'
import responsive from '../responsive_helper'
const Swipe = require('../../vendor/swipe')

const pallier = [
  {height: responsive.getHeightFromPercentage(39)},
  {height: responsive.getHeightFromPercentage(53)},
  {height: responsive.getHeightFromPercentage(66)}
]

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.life = 3;
    this.score = 0;
  }

  preload() {
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
    this.load.image('background', './assets/images/swimming_background.jpg')
    this.load.image('coeur', './assets/images/coeur.png')
    this.load.image('jury', './assets/images/swimming_jury.png')
    this.load.image('home', './assets/images/home.svg')
    this.load.image('play', './assets/images/play.svg')
    this.load.image('pause', './assets/images/pause.svg')
    this.load.image('btn1', './assets/images/swimming_BTN_1.png')
    this.load.image('btn2', './assets/images/swimming_BTN_2.png')
    this.load.image('btn3', './assets/images/swimming_BTN_3.png')
    this.load.image('btn4', './assets/images/swimming_BTN_4.png')
    this.load.image('oval', './assets/images/swimming_oval.png')
    this.load.image('record', './assets/images/swimming_record.png')
    this.load.image('perfect', './assets/images/swimming_perfect.png')
    this.load.image('fail', './assets/images/swimming_fail.png')
    this.load.spritesheet('star', './assets/images/swimming_stars.png', 280, 500)
    // this.load.spritesheet('nageuse', './assets/images/swimming_nageuse3.png', 255, 820)
    this.load.spritesheet('nageuse', './assets/images/swimming_little_nageuse2.png', 88, 225)
  }

  render() {
    // if (this.fontsReady) {
    // }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
  
  create() {
    const scaleRatio = window.devicePixelRatio / 3
    this.background = game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    this.swipe = new Swipe(this.game)
    game.add.sprite(game.width - 300, 80, 'jury');
    // Nageuse
    this.nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(40), responsive.getHeightFromPercentage(50), 'nageuse')
    this.nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(15), responsive.getHeightFromPercentage(40), 'nageuse')
    this.nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(65), responsive.getHeightFromPercentage(40), 'nageuse')
    let nageuseArray = [this.nageuse, this.nageuse3, this.nageuse2];
    this.nageuse.animations.add('run')
    this.nageuse2.animations.add('run')
    this.nageuse3.animations.add('run')
    this.nageuse.play('run', 8, true)
    this.nageuse2.play('run', 8, true)
    this.nageuse3.play('run', 8, true)

    //Stars
    this.star3 = this.game.add.sprite(responsive.getWidthFromPercentage(20), responsive.getHeightFromPercentage(40), 'star')
    this.star2 = this.game.add.sprite(responsive.getWidthFromPercentage(65), responsive.getHeightFromPercentage(40), 'star')
    this.star = this.game.add.sprite(responsive.getWidthFromPercentage(40), responsive.getHeightFromPercentage(50), 'star')
    this.star.scale.setTo(responsive.getRatioFromHeight(1760), responsive.getRatioFromHeight(1440))
    this.star2.scale.setTo(responsive.getRatioFromHeight(1760), responsive.getRatioFromHeight(1440))
    this.star3.scale.setTo(responsive.getRatioFromHeight(1760), responsive.getRatioFromHeight(1440))
    
    this.star.animations.add('run')
    this.star2.animations.add('run')
    this.star3.animations.add('run')
    this.star.visible = false;
    this.star2.visible = false;
    this.star3.visible = false;

    let starArray = [this.star, this.star2, this.star3];

    //Informations
    this.record = game.add.sprite(game.world.centerX, 32, 'record');
    this.fail = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'fail');
    this.perfect = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'perfect');
    this.record.anchor.setTo(0.5);
    this.fail.anchor.setTo(0.5);
    this.perfect.anchor.setTo(0.5);

    let styleRecord = {font: "1.6em myfrida-bold", fill: "#ffffff"};
    let styleScore = {font: "4.5em myfrida-bold", fill: "#ffffff"};
    let textScore = game.add.text(game.world.centerX, 50, '0', styleScore);
    let textRecord = game.add.text(game.world.centerX - 45,  22, 'RECORD :', styleRecord);
    let textFail = game.add.text(game.world.centerX,  game.world.centerY + 200, 'RATE', styleRecord);
    let textPerfect = game.add.text(game.world.centerX,  game.world.centerY + 200, 'PARFAIT', styleRecord);
    textFail.anchor.setTo(0.5);
    textPerfect.anchor.setTo(0.5);
    textFail.visible = false;
    textPerfect.visible = false;
    this.perfect.visible = false;
    this.fail.visible = false;

    //Circle
    var circle1 = game.add.sprite(game.width - 350, game.height - 80, 'oval')
    var circle2 = game.add.sprite(game.width - 260, game.height - 80, 'oval')
    var circle3 = game.add.sprite(game.width - 170, game.height - 80, 'oval')
    var circle4 = game.add.sprite(game.width - 80, game.height - 80, 'oval')

    // circle1.scale.setTo(0.5, 0.5)
    // circle2.scale.setTo(0.5, 0.5)
    // circle3.scale.setTo(0.5, 0.5)
    // circle4.scale.setTo(0.5, 0.5)

    circle1.inputEnabled = true;
    circle2.inputEnabled = true;
    circle3.inputEnabled = true;
    circle4.inputEnabled = true;

    //Button
    let btn1 = game.add.sprite(game.width - 340, game.height - 70, 'btn1');
    let btn2 = game.add.sprite(game.width - 250, game.height - 70, 'btn2');
    let btn3 = game.add.sprite(game.width - 160, game.height - 70, 'btn3');
    let btn4 = game.add.sprite(game.width - 70, game.height - 70, 'btn4');
    btn1.scale.setTo(0.5, 0.5)
    btn2.scale.setTo(0.5, 0.5)
    btn3.scale.setTo(0.5, 0.5)
    btn4.scale.setTo(0.5, 0.5)

    circle1.events.onInputDown.add(fail, this);
    circle2.events.onInputDown.add(perfect, this);

    //Heart
    let heart1 = game.add.sprite(game.width - 50, 20, 'coeur');
    let heart2 = game.add.sprite(game.width - 80, 20, 'coeur');
    let heart3 = game.add.sprite(game.width - 110, 20, 'coeur');
    heart1.scale.setTo(1.5, 1.5);
    heart2.scale.setTo(1.5, 1.5);
    heart3.scale.setTo(1.5, 1.5);
    let heart = [heart1, heart2, heart3];
  
    // Create menu
    var image = game.add.sprite(20, 20, 'pause');
    image.inputEnabled = true;
    image.events.onInputDown.add(listener, this);

    var bg = document.createElement('div');
    let bgSty = bg.style;
    bg.id = "bg";
    document.getElementById('wrapper').appendChild(bg);
    bgSty.position = "relative";
    bgSty.height = "200px";
    bgSty.width = "100%";
    bgSty.background = "#93DFF6";

    var div = document.createElement('div');
    let divSty = div.style;
    document.getElementById('bg').appendChild(div);
    divSty.position = "relative";
    divSty.display = "none";
    divSty.height = "100%";
    divSty.width = "100%";
    divSty.background = "#000000";
    divSty.opacity = "0.5";

    let graphics = this.game.add.graphics();
    graphics.beginFill(0x000000, 0.5);
    graphics.drawRect(0, 0, game.width, 2000);
    graphics.visible = false;

    var style = { font: "5em myfrida-bold", fill: "#ffffff", align: "center" };

    var home = game.add.sprite(game.world.centerX - 60, game.world.centerY, 'home');
    var play = game.add.sprite(game.world.centerX + 60, game.world.centerY, 'play');
    var text = game.add.text(game.world.centerX, game.world.centerY - 150, 'Pause', style);
    text.anchor.setTo(0.5, 0);
    home.anchor.setTo(0.5)
    play.anchor.setTo(0.5)
    play.visible = false;
    home.visible = false;
    text.visible = false;
    play.inputEnabled = true;
    home.inputEnabled = true;
    play.events.onInputDown.add(unpaused, this);
    home.events.onInputDown.add(redirect, this);
    
    function redirect(){
      location.replace("/#/");
    }

    function listener() {
      divSty.display = "block";
      game.paused = true;
      text.visible = true;
      graphics.visible = true;
      play.visible = true;
      home.visible = true;
      image.visible = false;
    }  

    function unpaused(){
      divSty.display = "none";
      game.paused = false;
      play.visible = false;
      home.visible = false;
      graphics.visible = false;
      text.visible = false;
      image.visible = true;
    }

    function fail(){
      this.fail.visible = true;
      textFail.visible = true;
      setTimeout(()=>{
        this.fail.visible = false;
        textFail.visible = false;
      }, 1000)
      heart[this.life-1].visible = false;
      nageuseArray[this.life-1].kill();
      this.life--;
      if(this.life == 0){
        this.nageuse.kill()
      }
    }

    function perfect(){
      this.perfect.visible = true;
      textPerfect.visible = true;
      setTimeout(()=>{
        this.perfect.visible = false;
        textPerfect.visible = false;
      }, 1000)
      this.score += 20;
      textScore.text = this.score;

      for(var i = 0; i < this.life; i++ ){
        console.log(i)
        starArray[i].visible = true;
        starArray[i].play('run', 8)
      }
      setTimeout(()=>{
        for(var i = 0; i < this.life; i++ ){
          starArray[i].visible = false;
        }
      }, 1000)
      
      
      // this.star.animations.add('run')
      // this.star2.animations.add('run')
      // this.star3.animations.add('run')
      // textScore.anchor.setTo(1, 1);
    }
  }
  update () {
    var direction = this.swipe.check()
    if (direction !== null) {
      // direction= { x: x, y: y, direction: direction }
      switch (direction.direction) {
        case this.swipe.DIRECTION_LEFT:
          break
        case this.swipe.DIRECTION_RIGHT:
          break
        case this.swipe.DIRECTION_UP:
          movePlayerRace(this, false)
          break
        case this.swipe.DIRECTION_DOWN:
          movePlayerRace(this, true)
          break
        case this.swipe.DIRECTION_UP_LEFT:
          movePlayerRace(this, false)
          break
        case this.swipe.DIRECTION_UP_RIGHT:
          movePlayerRace(this, false)
          break
        case this.swipe.DIRECTION_DOWN_LEFT:
          movePlayerRace(this, true)
          break
        case this.swipe.DIRECTION_DOWN_RIGHT:
          movePlayerRace(this, true)
          break
      }
    }
  }
}

var moveBackground = function (background) {
  background.x = background.x - 1
}

function movePlayerRace (self, boolean) {
  if (boolean) {
    const plusOne = self.playerRace + 1
    if (plusOne < pallier.length) {
      self.playerRace = plusOne
    }
  } else {
    const lessOne = self.playerRace - 1
    if (lessOne > 0) {
      self.playerRace = lessOne
    } else {
      self.playerRace = 0
    }
  }
  self.dude.y = pallier[self.playerRace].height
}

function collisionHandler (obj1, obj2) {
  //  The two sprites are colliding
  // shot.kill();
  this.mario.destroy();
  console.log("collision");
}
