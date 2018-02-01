import Phaser from 'phaser'
import WebFont from 'webfontloader'
const Swipe = require('../vendor/swipe');

const pallier = [
  {height: 250},
  {height: 320},
  {height: 390},
]

export default class extends Phaser.State {
  init() {
    // this.stage.backgroundColor = '#EDEEC9'
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
    this.load.image('loaderBar', './assets/images/loader-bar.png')
    this.load.image('background', './assets/images/pistegrande.jpg')
    this.load.spritesheet('dude', './assets/images/hex_run.png', 69, 81)
  }

  render() {
    // if (this.fontsReady) {
    //   this.state.start('Splash')
    // }
  }

  fontsLoaded() {
    this.fontsReady = true
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 14000, window.innerHeight, 'background')
    this.swipe = new Swipe(this.game)
    this.dude = this.game.add.sprite(window.innerWidth / 6, window.innerHeight - 81 - 185, 'dude')
    // this.physics.enable(this.dude, Phaser.Physics.ARCADE);
    this.dude.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.dude.play('run')
    this.playerRace = 1
    // this.dude.y = 250
    this.dude.y = pallier[this.playerRace].height
  }

  update () {
    moveBackground(this.background)

    var direction = this.swipe.check()
    if (direction !== null) {
      // direction= { x: x, y: y, direction: direction }
      switch (direction.direction) {
        case this.swipe.DIRECTION_LEFT:
          console.log('DIRECTION_LEFT')
          break
        case this.swipe.DIRECTION_RIGHT:
          console.log('DIRECTION_RIGHT')
          break
        case this.swipe.DIRECTION_UP:
          console.log('DIRECTION_UP')
          // this.dude.y = 250
          movePlayerRace(this, false)
          break
        case this.swipe.DIRECTION_DOWN:
          console.log('DIRECTION_DOWN')
          movePlayerRace(this, true)
          break
        case this.swipe.DIRECTION_UP_LEFT:
          console.log('DIRECTION_UP_LEFT')
          break
        case this.swipe.DIRECTION_UP_RIGHT:
          console.log('DIRECTION_UP_RIGHT')
          break
        case this.swipe.DIRECTION_DOWN_LEFT:
          console.log('DIRECTION_DOWN_LEFT')
          break
        case this.swipe.DIRECTION_DOWN_RIGHT:
          console.log('DIRECTION_DOWN_RIGHT')
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
