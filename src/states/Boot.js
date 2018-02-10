import Phaser from 'phaser'
import WebFont from 'webfontloader'
import responsive from './responsive_helper'
import constant from './constant'
const Swipe = require('../vendor/swipe')

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
  }

  preload() {
    // WebFont.load({
    //   google: {
    //     families: ['Bangers']
    //   },
    //   active: this.fontsLoaded
    // })

    // let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    // text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('pause', './assets/images/pause.svg')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
    this.load.image('background', './assets/images/background.jpg')
    this.load.image('home', './assets/images/home.svg')
    this.load.image('play', './assets/images/play.svg')
    this.load.spritesheet('dude', './assets/images/hex_run.png', 69, 81)
    this.load.spritesheet('mario', './assets/images/mario.png', 147, 180)
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
    // this.background = this.add.tileSprite(0, 0, 14000, window.innerHeight, 'background')
    // this.background = this.add.tileSprite(0, 0, 14000, responsive.getHeightFromPercentage(100), 'background')
    this.background = this.add.tileSprite(0, 0, 14000, constant.background.height, 'background')
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    // this.background.scale.setTo(0.2, 0.2)

    // this.scale.pageAlignVertically = true;
    // this.scale.pageAlignHorizontally = true;
    // this.scale.setShowAll();
    // this.scale.refresh();

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL
    // this.background = this.add.tileSprite(0, 0, 14000, window.innerHeight, 'background')
    // this.background.scale.maxHeight = game.height;

    this.swipe = new Swipe(this.game)
    // this.dude = this.game.add.sprite(window.innerWidth / 6, window.innerHeight - 81 - 185, 'dude')
    this.dude = this.game.add.sprite(responsive.getWidthFromPercentage(16.66), responsive.getHeightFromPercentage(100) - 81 - 185, 'dude')
    this.mario = this.game.add.sprite(responsive.getWidthFromPercentage(60), responsive.getHeightFromPercentage(50), 'mario')
    this.mario.scale.setTo(responsive.getRatioFromHeight(1760), responsive.getRatioFromHeight(1440))
    // this.physics.enable(this.dude, Phaser.Physics.ARCADE);
    this.dude.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.mario.animations.add('run', [0, 1, 2], 8, true)
    this.dude.play('run')
    this.mario.play('run')
    this.playerRace = 1
    // this.dude.y = 250
    this.dude.y = pallier[this.playerRace].height

    this.physics.arcade.enable(this.mario)
    this.mario.enableBody = true
    this.physics.arcade.enable(this.dude)
    this.dude.enableBody = true
    
    // Create menu
    var image = game.add.sprite(20, 20, 'pause');
    image.inputEnabled = true;
    image.events.onInputDown.add(listener, this);

    let graphics = this.game.add.graphics();
    graphics.beginFill(0x000000, 0.5);
    graphics.drawRect(0, 0, game.width, game.height);
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
      game.paused = true;
      text.visible = true;
      graphics.visible = true;
      play.visible = true;
      home.visible = true;
      image.visible = false;
    }  

    function unpaused(){
      game.paused = false;
      play.visible = false;
      home.visible = false;
      graphics.visible = false;
      text.visible = false;
      image.visible = true;
    }
  }
  update () {
    this.mario.x = this.mario.x - 0.4
    this.physics.arcade.overlap(this.dude, this.mario, collisionHandler, null, this)
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
  self.dude.y = pallier[self.playerRace].height
}

function collisionHandler (obj1, obj2) {
  //  The two sprites are colliding
  // shot.kill();
  this.mario.destroy();
  console.log("collision");
}
