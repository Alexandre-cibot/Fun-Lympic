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
const gameWidth = 1400000
const obstacleWidthFrequency = 600
const speedCoefIfTakeObstacle = 0.8
const xValueWhenSpriteKilled = -200
let speedCoef = 1.8
const sprinterSpeedCoefSlowDown = 0.992
const nbLife = 3
let isFontsLoaded = false

const sprinterFallFrameFlag = {
  counter: 0,
  max: constant.sprinterFallSprite.nbSprites - 1
}
const speedCoefInterval = setInterval(() => {
  if (store.state.tutoOK) {
    if (speedCoef !== sprinterSpeedCoefSlowDown) {
      speedCoef = speedCoef * constant.speed.multiplicator
    }
  }
}, constant.speed.every)

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

const duckInfo = {
  name: 'duck',
  y: pallier,
  execute: generateDuck
}

const plotInfo = {
  name: 'plot',
  y: pallier,
  execute: generatePlot
}

const obstacles = [
  mamieInfo,
  catInfo,
  dancerInfo,
  duckInfo,
  plotInfo
]

function fontsLoaded () {
  isFontsLoaded = true
}

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
    this.score = 0
  }

  preload() {
    window.WebFontConfig = {
      active: function() { game.time.events.add(Phaser.Timer.SECOND, fontsLoaded, this); },
      google: {
        families: ['Nunito']
      }
    }
    game.time.advancedTiming = true

    this.load.image('pause', './assets/images/pause.svg')
    this.load.image('background', './assets/images/background.png')
    this.load.image('home', './assets/images/home.png')
    this.load.image('play', './assets/images/play.png')
    this.load.spritesheet('sprinter', './assets/images/sprint_sprinter_run.png', constant.sprinterSprite.width / constant.sprinterSprite.nbSprites, constant.sprinterSprite.height)
    this.load.spritesheet('sprinter_stop', './assets/images/sprint_sprinter_stop.png', constant.sprinterStopSprite.width / constant.sprinterStopSprite.nbSprites, constant.sprinterStopSprite.height)
    this.load.spritesheet('sprinter_fall', './assets/images/sprint_sprinter_fall.png', constant.sprinterFallSprite.width / constant.sprinterFallSprite.nbSprites, constant.sprinterFallSprite.height)
    this.load.spritesheet('mamie', './assets/images/sprint_mamie.png', constant.mamieSprite.width / constant.mamieSprite.nbSprites, constant.mamieSprite.height)
    this.load.spritesheet('cat', './assets/images/sprint_cat.png', constant.catSprite.width / constant.catSprite.nbSprites, constant.catSprite.height)
    this.load.spritesheet('dancer', './assets/images/sprint_dancer.png', constant.dancerSprite.width / constant.dancerSprite.nbSprites, constant.dancerSprite.height)
    this.load.spritesheet('duck', './assets/images/sprint_duck.png', constant.duckSprite.width / constant.duckSprite.nbSprites, constant.duckSprite.height)
    this.load.spritesheet('plot', './assets/images/sprint_plot.png', constant.plotSprite.width / constant.plotSprite.nbSprites, constant.plotSprite.height)
    this.load.image('coeur', './assets/images/coeur.png')
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js')
    this.load.image('record', './assets/images/swimming_record.png')
    this.load.image('newRecord', './assets/images/swimming_new_record.png')

    this.load.audio('pas', ['./assets/musique/pas.mp3']);
    this.load.audio('swipe', ['./assets/musique/swipe.mp3']);
    this.load.audio('impact', ['./assets/musique/impact.mp3']);
    this.load.audio('pan', ['./assets/musique/pan.mp3']);
  }

  render() {
    game.debug.text(game.time.fps || 25, 2, 14, "black");
    if (isFontsLoaded) {
      // var myText = game.add.text(game.world.centerX, game.world.centerY, "best font ever");
      // myText.anchor.setTo(0.5);
    
      // myText.font = 'Nunito';
      // myText.fontSize = 60;
    
      // myText.align = 'center';
      // myText.stroke = '#999999';
      // myText.strokeThickness = 2;
      // myText.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    
      // myText.inputEnabled = true;
      // myText.input.enableDrag();
    }
  }

  create () {
    this.go = false
    this.fall = false

    this.swipe = new Swipe(this.game)
    this.playerRace = 1

    this.background = this.add.tileSprite(0, 0, gameWidth, constant.background.height, 'background')
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    this.mamieNames = []
    this.catNames = []
    this.dancerNames = []
    this.duckNames = []
    this.plotNames = []
    let previousObstacle = mamieInfo
    let previousPreviousObstacle = dancerInfo
    this.obstacleOrder = []
    this.obstacleOrderIndex = 1
    for (let i = 0; i < gameWidth / obstacleWidthFrequency; i++) {
      let randomNumber = getRandom(0, obstacles.length - 1)
      while (obstacles[randomNumber].name === previousObstacle.name || obstacles[randomNumber].name === previousPreviousObstacle.name) {
        randomNumber = getRandom(0, obstacles.length - 1)
      }
      previousPreviousObstacle = previousObstacle
      previousObstacle = obstacles[randomNumber]
      if (!this.obstacleOrder.includes(obstacles[randomNumber].name)) {
        obstacles[randomNumber].execute(this, this.obstacleOrderIndex)
        this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      }
      this.obstacleOrder.push(obstacles[randomNumber].name)
    }
    console.log('Ordre des obstacles', this.obstacleOrder)

    this.sprinter = this.game.add.sprite(responsive.getWidthFromPercentage(5), responsive.getHeightFromPercentage(100), 'sprinter')
    this.sprinter.animations.add('run', getArraySpriteFromArrayLength(constant.sprinterSprite.nbSprites), constant.sprinterSprite.spriteSpeed, true)
    this.sprinter.scale.setTo(responsive.getRatioFromHeight((constant.sprinterSprite.width / constant.sprinterSprite.nbSprites) * constant.sprinterSprite.heightRatio), responsive.getRatioFromHeight(constant.sprinterSprite.height * constant.sprinterSprite.heightRatio))
    this.sprinter.play('run')
    this.sprinter.y = pallier[this.playerRace].height + constant.sprinterSprite.heightFix
    this.sprinter.enableBody = true
    this.physics.arcade.enable(this.sprinter)
    this.sprinter.visible = false

    this.sprinterStop = this.game.add.sprite(responsive.getWidthFromPercentage(16), responsive.getHeightFromPercentage(100), 'sprinter_stop')
    this.sprinterStop.animations.add('run', getArraySpriteFromArrayLength(constant.sprinterStopSprite.nbSprites), constant.sprinterStopSprite.spriteSpeed, true)
    this.sprinterStop.scale.setTo(responsive.getRatioFromHeight((constant.sprinterSprite.width / constant.sprinterSprite.nbSprites) * constant.sprinterStopSprite.heightRatio), responsive.getRatioFromHeight(constant.sprinterStopSprite.height * constant.sprinterStopSprite.heightRatio))
    this.sprinterStop.play('run')
    this.sprinterStop.y = pallier[this.playerRace].height + constant.sprinterStopSprite.heightFix
    this.sprinterStop.enableBody = true
    this.physics.arcade.enable(this.sprinterStop)

    this.sprinterFall = this.game.add.sprite(responsive.getWidthFromPercentage(16), responsive.getHeightFromPercentage(100), 'sprinter_fall')
    this.sprinterFall.animations.add('run', getArraySpriteFromArrayLength(constant.sprinterFallSprite.nbSprites), constant.sprinterFallSprite.spriteSpeed, false)
    this.sprinterFall.scale.setTo(responsive.getRatioFromHeight((constant.sprinterSprite.width / constant.sprinterSprite.nbSprites) * constant.sprinterFallSprite.heightRatio), responsive.getRatioFromHeight(constant.sprinterFallSprite.height * constant.sprinterFallSprite.heightRatio))
    this.sprinterFall.play('run')
    this.sprinterFall.y = pallier[this.playerRace].height + constant.sprinterFallSprite.heightFix
    this.sprinterFall.enableBody = true
    this.physics.arcade.enable(this.sprinterFall)

    // life system
    this.lifeRemaining = nbLife
    this.sprinter.nbFlashing = 0
    // this.sprinter.flashBoolean = true
    console.log('life', this.lifeRemaining);
    this.substractLife = function () {
      this.sprinter.nbFlashing = 80
      this.lifeRemaining = this.lifeRemaining - 1
      if (this.lifeRemaining <= 0) {
        this.fall = true
      }
    }
    // END life system

    // song
    this.pasSong = game.add.audio('pas')
    this.pasSong.volume = 0.1
    this.swipeSong = game.add.audio('swipe')
    this.impactSong = game.add.audio('impact')
    this.panSong = game.add.audio('pan')
    // END song

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

    var style = { font: "5em myfrida_bold", fill: "#ffffff", align: "center" };

    var home = game.add.sprite(game.world.centerX - 60, game.world.centerY, 'home');
    var play = game.add.sprite(game.world.centerX + 60, game.world.centerY, 'play');
    var text = game.add.text(game.world.centerX, game.world.centerY - 150, 'Pause', style);
    text.anchor.setTo(0.5, 0);
    home.anchor.setTo(0.5)
    play.anchor.setTo(0.5)
    home.scale.setTo(0.5)
    play.scale.setTo(0.5)
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

    // score
    const styleScore = {font: "4.5em Nunito", fill: "#ffffff", align: "center", boundsAlignV: "middle"};
    let styleRecord = {font:'1.6em Nunito',fill: "#ffffff"};
    this.textScore = game.add.text(game.world.centerX, 50, '0', styleScore);
    this.textScore.anchor.setTo(0.5, 0);
    this.textScore.stroke = '#69629A';
    this.textScore.strokeThickness = 4;
    // END score

    // record
    this.oldRecord = getRecord()
    this.record = game.add.sprite(game.world.centerX, 32, 'record');
    this.record.anchor.setTo(0.5);
    this.textRecord = game.add.text(game.world.centerX - 45, 22, 'RECORD :', styleRecord);
    this.textRecord.text = 'Record : ' + this.oldRecord
    this.newRecord = game.add.sprite(game.world.centerX, 32, 'newRecord');
    this.newRecord.anchor.setTo(0.5);
    this.newRecord.visible = false;
    // END record

    // Heart
    const heart1 = game.add.sprite(game.width - 50, 20, 'coeur');
    const heart2 = game.add.sprite(game.width - 80, 20, 'coeur');
    const heart3 = game.add.sprite(game.width - 110, 20, 'coeur');
    heart1.scale.setTo(1.2, 1.2);
    heart2.scale.setTo(1.2, 1.2);
    heart3.scale.setTo(1.2, 1.2);
    this.heart = [heart1, heart2, heart3];
    // END hesart
    store.commit('isSprintLoaded', true)

    let styleCountDown = {font: "14em Nunito", fill: "#F4426D", align: "center", boundsAlignV: "middle"};
    this.textCountDown = game.add.text(game.world.centerX, game.world.centerY, '3', styleCountDown);
    this.textCountDown.anchor.setTo(0.5)
    this.textCountDown.stroke = '#C53054';
    this.textCountDown.strokeThickness = 12;
    this.time = 3
    this.countDown = setInterval(() => {
      if (store.state.tutoOK) {
        this.time--
        this.textCountDown.text = this.time
        if (this.time === 0) {
          this.go = true
          this.textCountDown.visible = false
          this.panSong.play();
          clearInterval(this.countDown)
        }
      }
    }, 1000)

    const pasSong = setInterval(() => {
      if (store.state.tutoOK) {
        if (this.go) {
          this.pasSong.play()
        }
      }
    }, 1000)

    const destroyGame = setInterval(function () {
      game.paused = !store.state.tutoOK
      if (!store.state.sprintGame) {
        game.state.destroy()
        game.sound.destroy()
        game.scale.destroy()
        game.stage.destroy()
        game.input.destroy()
        game.physics.destroy()
        game.plugins.destroy()
        clearInterval(destroyGame)
        clearInterval(speedCoefInterval)
        clearInterval(pasSong)
      }
    }, 500)
  }
  update () {
    // console.log('speedCoef', speedCoef);
    // console.log('FPS', game.time.fps);
    console.log(this.time);
    this.heart[0].visible = this.lifeRemaining > 0
    this.heart[1].visible = this.lifeRemaining > 1
    this.heart[2].visible = this.lifeRemaining > 2
    this.score = parseInt(-this.background.x / 100)
    this.textScore.text = this.score
    if (this.score > this.oldRecord) {
      this.newRecord.visible = true;
    }
    if (!this.go) {
      if (this.fall) {
        if (sprinterFallFrameFlag.counter <= sprinterFallFrameFlag.max) {
          this.sprinterFall.frame = sprinterFallFrameFlag.counter
          sprinterFallFrameFlag.counter = sprinterFallFrameFlag.counter + 1
        }
        this.sprinterFall.revive()

        this.sprinter.visible = false
        this.sprinterStop.visible = false
        this.sprinterFall.y = pallier[this.playerRace].height + constant.sprinterFallSprite.heightFix
        this.sprinterFall.visible = true
        moveBackground(this.background)
        setRecord(this.score)
        speedCoef = sprinterSpeedCoefSlowDown
      } else {
        this.sprinter.visible = false
        this.sprinterStop.visible = true
        this.sprinterFall.visible = false
      }
      return
    }
    this.sprinter.visible = true
    this.sprinterStop.kill()
    this.sprinterFall.kill()
    if (this.lifeRemaining <= 0 && this.fall) {
      this.sprinter.kill()
      this.sprinterFall.revive()
      this.go = false
    }
    // console.log('flash', this.sprinter.nbFlashing);
    if (this.sprinter.nbFlashing > 0) {
      if ((this.sprinter.nbFlashing % 3) === 0) {
        this.sprinter.alpha = 0.05
      } else {
        this.sprinter.alpha = 1
      }
      this.sprinter.nbFlashing = this.sprinter.nbFlashing - 1
    } else {
      this.sprinter.alpha = 1
    }

    moveBackground(this.background)

    if (this.mamie.x < xValueWhenSpriteKilled) {
      this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      this.mamie.x = getXFromSpriteName(this, 'mamie')
      this.mamie.y = mamieInfo.y[getRandom(0, mamieInfo.y.length - 1)].height
    } else {
      this.mamie.x = this.mamie.x + (this.mamie.x > responsive.width ? constant.background.speed * speedCoef : constant.mamieSprite.speed * speedCoef)
      this.physics.arcade.overlap(this.sprinter, this.mamie, mamieCollisionHandler, null, this)
    }

    if (this.cat.x < xValueWhenSpriteKilled) {
      // this.cat.x = responsive.width
      this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      this.cat.x = getXFromSpriteName(this, 'cat')
      this.cat.y = catInfo.y[getRandom(0, catInfo.y.length - 1)].height
    } else {
      this.cat.x = this.cat.x + (this.cat.x > responsive.width ? constant.background.speed * speedCoef : constant.catSprite.speed * speedCoef)
      this.physics.arcade.overlap(this.sprinter, this.cat, catCollisionHandler, null, this)
    }

    if (this.dancer.x < xValueWhenSpriteKilled) {
      const {heightFix} = constant.dancerSprite
      this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      this.dancer.x = getXFromSpriteName(this, 'dancer')
      this.dancer.y = dancerInfo.y[getRandom(0, dancerInfo.y.length - 1)].height + heightFix
    } else {
      this.dancer.x = this.dancer.x + (this.dancer.x > responsive.width ? constant.background.speed * speedCoef : constant.dancerSprite.speed * speedCoef)
      this.physics.arcade.overlap(this.sprinter, this.dancer, dancerCollisionHandler, null, this)
    }

    if (this.duck.x < xValueWhenSpriteKilled) {
      const {heightFix} = constant.duckSprite
      this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      this.duck.x = getXFromSpriteName(this, 'duck')
      this.duck.y = duckInfo.y[getRandom(0, duckInfo.y.length - 1)].height + heightFix
    } else {
      this.duck.x = this.duck.x + (this.duck.x > responsive.width ? constant.background.speed * speedCoef : constant.duckSprite.speed * speedCoef)
      this.physics.arcade.overlap(this.sprinter, this.duck, duckCollisionHandler, null, this)
    }
    if (this.plot.x < xValueWhenSpriteKilled) {
      const {heightFix} = constant.plotSprite
      this.obstacleOrderIndex = this.obstacleOrderIndex + 1
      this.plot.x = getXFromSpriteName(this, 'plot')
      this.plot.y = plotInfo.y[getRandom(0, plotInfo.y.length - 1)].height + heightFix
    } else {
      this.plot.x = this.plot.x + (this.plot.x > responsive.width ? constant.background.speed * speedCoef : constant.plotSprite.speed * speedCoef)
      this.physics.arcade.overlap(this.sprinter, this.plot, plotCollisionHandler, null, this)
    }

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
  if (speedCoef === sprinterSpeedCoefSlowDown) {
    if (constant.background.speed > -0.11) {
      constant.background.speed = 0
      if (game.oldRecord < game.record) {
        setRecord(game.record)
      }
    }
    constant.background.speed = constant.background.speed * speedCoef
  }
  background.x = background.x + (constant.background.speed * speedCoef)
}

function movePlayerRace (self, boolean) {
  self.swipeSong.play()
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
  self.sprinter.y = pallier[self.playerRace].height + constant.sprinterSprite.heightFix
}

function mamieCollisionHandler (sprinter, mamie) {
  if ((mamie.y + constant.sprinterSprite.heightFix) === sprinter.y) {
    this.obstacleOrderIndex = this.obstacleOrderIndex + 1
    mamie.x = xValueWhenSpriteKilled
    this.substractLife()
    speedCoef = speedCoef * speedCoefIfTakeObstacle
    this.impactSong.play()
  }
}

function catCollisionHandler (sprinter, cat) {
  if ((cat.y + constant.sprinterSprite.heightFix) === sprinter.y) {
    this.obstacleOrderIndex = this.obstacleOrderIndex + 1
    cat.x = xValueWhenSpriteKilled
    this.substractLife()
    speedCoef = speedCoef * speedCoefIfTakeObstacle
    this.impactSong.play()
  }
}

function dancerCollisionHandler (sprinter, dancer) {
  const hotfix = +30
  if ((dancer.y + constant.sprinterSprite.heightFix + constant.dancerSprite.heightFix + hotfix) === sprinter.y) {
    this.obstacleOrderIndex = this.obstacleOrderIndex + 1
    dancer.x = xValueWhenSpriteKilled
    this.substractLife()
    speedCoef = speedCoef * speedCoefIfTakeObstacle
    this.impactSong.play()
  }
}

function duckCollisionHandler (sprinter, duck) {
  const hotfix = +30
  if ((duck.y + constant.sprinterSprite.heightFix + constant.duckSprite.heightFix + hotfix) === sprinter.y) {
    this.obstacleOrderIndex = this.obstacleOrderIndex + 1
    duck.x = xValueWhenSpriteKilled
    this.substractLife()
    speedCoef = speedCoef * speedCoefIfTakeObstacle
    this.impactSong.play()
  }
}

function plotCollisionHandler (sprinter, plot) {
  const hotfix = -48
  if ((plot.y + constant.sprinterSprite.heightFix + constant.plotSprite.heightFix + hotfix) === sprinter.y) {
    this.obstacleOrderIndex = this.obstacleOrderIndex + 1
    plot.x = xValueWhenSpriteKilled
    this.substractLife()
    speedCoef = speedCoef * speedCoefIfTakeObstacle
    this.impactSong.play()
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
  const name = 'mamie'
  self[name] = self.game.add.sprite(height, width / nbSprites, 'mamie')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = mamieInfo.y[getRandom(0, mamieInfo.y.length - 1)].height
  // self[name].x = index * obstacleWidthFrequency
  self[name].x = getXFromSpriteName(self, name)
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.mamieNames.push(name)
}

function generateCat (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed} = constant.catSprite
  const name = 'cat'
  self[name] = self.game.add.sprite(height, width / nbSprites, 'cat')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = catInfo.y[getRandom(0, catInfo.y.length - 1)].height
  // self[name].x = index * obstacleWidthFrequency
  self[name].x = getXFromSpriteName(self, name)
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.catNames.push(name)
}

function generateDancer (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed, heightFix} = constant.dancerSprite
  const name = 'dancer'
  self[name] = self.game.add.sprite(height, width / nbSprites, 'dancer')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = dancerInfo.y[getRandom(0, dancerInfo.y.length - 1)].height + heightFix
  // self[name].x = index * obstacleWidthFrequency
  self[name].x = getXFromSpriteName(self, name)
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.dancerNames.push(name)
}

function generateDuck (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed, heightFix} = constant.duckSprite
  const name = 'duck'
  self[name] = self.game.add.sprite(height, width / nbSprites, 'duck')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = duckInfo.y[getRandom(0, duckInfo.y.length - 1)].height + heightFix
  // self[name].x = index * obstacleWidthFrequency
  self[name].x = getXFromSpriteName(self, name)
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.duckNames.push(name)
}

function generatePlot (self, index) {
  const {height, width, nbSprites, heightRatio, spriteSpeed, heightFix} = constant.plotSprite
  const name = 'plot'
  self[name] = self.game.add.sprite(height, width / nbSprites, 'plot')
  self[name].scale.setTo(responsive.getRatioFromHeight((width / nbSprites) * heightRatio), responsive.getRatioFromHeight(height * heightRatio))
  self[name].animations.add('run', getArraySpriteFromArrayLength(nbSprites), spriteSpeed, true)
  self[name].play('run')
  self[name].y = plotInfo.y[getRandom(0, plotInfo.y.length - 1)].height + heightFix
  // self[name].x = index * obstacleWidthFrequency
  self[name].x = getXFromSpriteName(self, name)
  self[name].enableBody = true
  self.physics.arcade.enable(self[name])
  self.plotNames.push(name)
}

function getXFromSpriteName (self, spriteName) {
  return self.obstacleOrderIndex * obstacleWidthFrequency
}

function getRandom (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRecord () {
  return window.localStorage.getItem('athleticsRecord') || 0
}

function setRecord (record) {
  return window.localStorage.setItem('athleticsRecord', record)
}
