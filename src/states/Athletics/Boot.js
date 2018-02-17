import Phaser from 'phaser'
import WebFont from 'webfontloader'
import responsive from '../responsive_helper'
import constant from './constant'
import store from '../../store'
const Swipe = require('../../vendor/swipe')

const pallier = [
  {height: responsive.getHeightFromPercentage(39)},
  {height: responsive.getHeightFromPercentage(53)},
  {height: responsive.getHeightFromPercentage(66)}
]

const gameWidth = 140000
const obstacleWidthFrequency = 300

function getRandom (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const mamieInfo = {
  name: 'mamie',
  speed: 1,
  y: [ ...pallier ]
}

const obstacle = [
  ...mamieInfo,
]

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload() {
    // WebFont.load({
    //   custom: {
    //     families: ['myfrida-bold'],
    //     urls: ["../../css/main.css"]
    //   }
    // })

    // let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    // text.anchor.setTo(0.5, 0.5)
    this.load.image('pause', './assets/images/pause.svg')
    this.load.image('background', './assets/images/background.jpg')
    this.load.image('home', './assets/images/home.svg')
    this.load.image('play', './assets/images/play.svg')
    this.load.spritesheet('dude', './assets/images/spint_dude_run.png', 254.6, 300)
    this.load.spritesheet('mamie', './assets/images/mamie.png', 211, 309)
  }

  render() {
    // if (this.fontsReady) {
    // }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
  
  create() {
    this.swipe = new Swipe(this.game)
    this.playerRace = 1

    this.background = this.add.tileSprite(0, 0, gameWidth, constant.background.height, 'background')
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    this.mamieNames = []
    for (let i = 0; i < gameWidth / obstacleWidthFrequency; i++) {
      const name = 'mamie' + i
      this[name] = this.game.add.sprite(constant.mamieSprite.height, constant.mamieSprite.width / constant.mamieSprite.nbSprites, 'mamie')
      this[name].scale.setTo(responsive.getRatioFromHeight(constant.mamieSprite.height * constant.mamieSprite.heightRatio), responsive.getRatioFromHeight(constant.mamieSprite.height * constant.mamieSprite.heightRatio))
      this[name].animations.add('run', getArraySpriteFromArrayLength(constant.mamieSprite.nbSprites), constant.mamieSprite.spriteSpeed, true)
      this[name].play('run')
      this[name].y = mamieInfo.y[getRandom(0, mamieInfo.y.length - 1)].height
      this[name].x = i * obstacleWidthFrequency
      this[name].enableBody = true
      this.physics.arcade.enable(this[name])
      this.mamieNames.push(name)
    }

    this.dude = this.game.add.sprite(responsive.getWidthFromPercentage(5), responsive.getHeightFromPercentage(100), 'dude')
    this.dude.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 22, true)
    this.dude.scale.setTo(responsive.getRatioFromHeight(254.6 * 4.3), responsive.getRatioFromHeight(300 * 4.3))
    this.dude.play('run')
    this.dude.y = pallier[this.playerRace].height - 70
    this.dude.enableBody = true
    this.physics.arcade.enable(this.dude)

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
    bgSty.background = "#66DF91";

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
    store.commit('isSprintLoaded', true)
  }
  update () {
    this.mamieNames.forEach((mamieName) => {
      this[mamieName].x = this[mamieName].x - 1.3
      this.physics.arcade.overlap(this.dude, this[mamieName], mamieCollisionHandler, null, this)
    })
    moveBackground(this.background)

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
  self.dude.y = pallier[self.playerRace].height - 70
}

function mamieCollisionHandler (dude, mamie) {
  if ((mamie.y - 70) === dude.y) {
    mamie.destroy()
    console.log("collision mamie");
  }
}

function getArraySpriteFromArrayLength(arrayLength) {
  const array = []
  for (let index = 0; index < arrayLength; index++) {
    array.push(index)
  }
  return array
}
