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
  y: pallier,
  execute: generateMamie
}

const catInfo = {
  name: 'cat',
  y: pallier,
  execute: generateCat
}

const dancerInfo = {
  name: 'dancer',
  y: pallier,
  execute: generateDancer
}

const obstacles = [
  mamieInfo,
  catInfo,
  dancerInfo
]
console.log(obstacles);

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
    this.load.spritesheet('sprinter', './assets/images/spint_sprinter_run.png', constant.sprinterSprite.width / constant.sprinterSprite.nbSprites, constant.sprinterSprite.height)
    this.load.spritesheet('mamie', './assets/images/mamie.png', constant.mamieSprite.width / constant.mamieSprite.nbSprites, constant.mamieSprite.height)
    this.load.spritesheet('cat', './assets/images/sprint_cat.png', constant.catSprite.width / constant.catSprite.nbSprites, constant.catSprite.height)
    this.load.spritesheet('dancer', './assets/images/sprint_dancer.png', constant.dancerSprite.width / constant.dancerSprite.nbSprites, constant.dancerSprite.height)
  }

  render() {
    // if (this.fontsReady) {
    // }
  }

  fontsLoaded () {
    this.fontsReady = true
  }

  create () {
    this.swipe = new Swipe(this.game)
    this.playerRace = 1

    this.background = this.add.tileSprite(0, 0, gameWidth, constant.background.height, 'background')
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    this.mamieNames = []
    this.catNames = []
    this.dancerNames = []
    let previousObstacle = mamieInfo.name
    for (let i = 0; i < gameWidth / obstacleWidthFrequency; i++) {
      let randomNumber = getRandom(0, obstacles.length - 1)
      if (obstacles[randomNumber].name === previousObstacle) {
        randomNumber = (randomNumber + 1) > (obstacles.length - 1) ? 0 : randomNumber + 1
        previousObstacle = obstacles[randomNumber].name
      }
      obstacles[randomNumber].execute(this, i)
    }

    this.sprinter = this.game.add.sprite(responsive.getWidthFromPercentage(5), responsive.getHeightFromPercentage(100), 'sprinter')
    this.sprinter.animations.add('run', getArraySpriteFromArrayLength(constant.sprinterSprite.nbSprites), constant.sprinterSprite.spriteSpeed, true)
    this.sprinter.scale.setTo(responsive.getRatioFromHeight((constant.sprinterSprite.width / constant.sprinterSprite.nbSprites) * constant.sprinterSprite.heightRatio), responsive.getRatioFromHeight(constant.sprinterSprite.height * constant.sprinterSprite.heightRatio))
    this.sprinter.play('run')
    this.sprinter.y = pallier[this.playerRace].height - 70
    this.sprinter.enableBody = true
    this.physics.arcade.enable(this.sprinter)

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
      this[mamieName].x = this[mamieName].x + constant.mamieSprite.speed
      this.physics.arcade.overlap(this.sprinter, this[mamieName], mamieCollisionHandler, null, this)
    })
    this.catNames.forEach((catName) => {
      this[catName].x = this[catName].x + constant.catSprite.speed
      this.physics.arcade.overlap(this.sprinter, this[catName], catCollisionHandler, null, this)
    })
    this.dancerNames.forEach((dancerName) => {
      this[dancerName].x = this[dancerName].x + constant.catSprite.speed
      this.physics.arcade.overlap(this.sprinter, this[dancerName], catCollisionHandler, null, this)
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
  background.x = background.x + constant.background.speed
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
  self.sprinter.y = pallier[self.playerRace].height - 70
}

function mamieCollisionHandler (sprinter, mamie) {
  if ((mamie.y - 70) === sprinter.y) {
    mamie.destroy()
    console.log("collision mamie");
  }
}

function catCollisionHandler (sprinter, cat) {
  if ((cat.y - 70) === sprinter.y) {
    cat.destroy()
  }
}

function getArraySpriteFromArrayLength (arrayLength) {
  const array = []
  for (let index = 0; index < arrayLength; index++) {
    array.push(index)
  }
  return array
}

function generateMamie (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed} = constant.mamieSprite
  const name = 'mamie' + index
  self[name] = self.game.add.sprite(height, width / nbSprites, 'mamie')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = mamieInfo.y[getRandom(0, mamieInfo.y.length - 1)].height
  self[name].x = index * obstacleWidthFrequency
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.mamieNames.push(name)
}

function generateCat (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed} = constant.catSprite
  const name = 'cat' + index
  self[name] = self.game.add.sprite(height, width / nbSprites, 'cat')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = catInfo.y[getRandom(0, catInfo.y.length - 1)].height
  self[name].x = index * obstacleWidthFrequency
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.catNames.push(name)
}

function generateDancer (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed} = constant.dancerSprite
  const name = 'dancer' + index
  self[name] = self.game.add.sprite(height, width / nbSprites, 'dancer')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = dancerInfo.y[getRandom(0, dancerInfo.y.length - 1)].height
  self[name].x = index * obstacleWidthFrequency
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.dancerNames.push(name)
}
