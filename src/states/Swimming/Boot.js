import Phaser from 'phaser'
import WebFont from 'webfontloader'
import responsive from '../responsive_helper'
import store from '../../store'

let isFontsLoaded = false

function fontsLoaded () {
  isFontsLoaded = true
}

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.life = 3
    this.score = 0
    this.timeRandom = 4
  }

  preload() {
    window.WebFontConfig = {
      active: function() { game.time.events.add(Phaser.Timer.SECOND, fontsLoaded, this); },
      google: {
        families: ['Nunito']
      }
    }
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.load.image('background', './assets/images/piscine2.jpg')
    this.load.image('coeur', './assets/images/coeur.png')
    this.load.image('jury', './assets/images/swimming_jury.png')
    this.load.image('juryHappy', './assets/images/swimming_jury_happy.png')
    this.load.image('juryUnhappy', './assets/images/swimming_jury_unhappy.png')
    this.load.image('home', './assets/images/home.png')
    this.load.image('play', './assets/images/play.png')
    this.load.image('pause', './assets/images/pause.svg')
    this.load.image('share', './assets/images/share.png')
    this.load.image('btn1', './assets/images/swimming_BTN_1.png')
    this.load.image('btn2', './assets/images/swimming_BTN_2.png')
    this.load.image('btn3', './assets/images/swimming_BTN_3.png')
    this.load.image('btn4', './assets/images/swimming_BTN_4.png')
    this.load.image('oval', './assets/images/swimming_oval.png')
    this.load.image('record', './assets/images/swimming_record.png')
    this.load.image('newRecord', './assets/images/swimming_new_record.png')
    this.load.image('perfect', './assets/images/swimming_perfect.png')
    this.load.image('fail', './assets/images/swimming_fail.png')
    this.load.image('pose1Nag1', './assets/images/swimming_Pose1_nag1.png')
    this.load.image('pose1Nag2', './assets/images/swimming_Pose1_nag2.png')
    this.load.image('pose1Nag3', './assets/images/swimming_Pose1_nag3.png')
    this.load.image('pose2Nag1', './assets/images/swimming_Pose2_nag1.png')
    this.load.image('pose2Nag2', './assets/images/swimming_Pose2_nag2.png')
    this.load.image('pose2Nag3', './assets/images/swimming_Pose2_nag3.png')
    this.load.image('pose3Nag1', './assets/images/swimming_Pose3_nag1.png')
    this.load.image('pose3Nag2', './assets/images/swimming_Pose3_nag2.png')
    this.load.image('pose3Nag3', './assets/images/swimming_Pose3_nag3.png')
    this.load.image('pose4Nag1', './assets/images/swimming_pos4_nag1-min.png')
    this.load.image('pose4Nag2', './assets/images/swimming_pos4_nag2-min.png')
    this.load.image('pose4Nag3', './assets/images/swimming_pos4_nag3-min.png')

    this.load.spritesheet('dead1', './assets/images/noyade-3-min.png', 120, 400)
    this.load.spritesheet('dead2', './assets/images/noyade-1-min.png', 120, 400)
    this.load.spritesheet('dead3', './assets/images/noyade-2-min.png', 136, 420)

    this.load.spritesheet('star', './assets/images/swimming_stars.png', 280, 500)
    this.load.spritesheet('nageuse1', './assets/images/swimming_little_nageuse1.png', 60, 213)
    this.load.spritesheet('nageuse2', './assets/images/swimming_little_nageuse2.png', 84, 214)
    this.load.spritesheet('nageuse3', './assets/images/swimming_little_nageuse3.png', 67, 215)
    
    game.load.audio('water', ['./assets/musique/eau.mp3']);
    game.load.audio('sifflet', ['./assets/musique/sifflet.mp3']);
    game.load.audio('bling', ['./assets/musique/bling.mp3']);
    game.load.audio('bouh', ['./assets/musique/bouh.mp3']);
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js')
  }

  render () {
    if (isFontsLoaded) {
    }

  }

  create() {
    this.background = game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(responsive.getRatioFromHeight(this.background.height), responsive.getRatioFromHeight(this.background.height))
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    // Count the click of the user on the circle
    this.clickArr = [];
    // Count the number of times the circles appeared
    this.spawnArr = [];

    //Song
    let bouh = game.add.audio('bouh');
    this.sifflet = game.add.audio('sifflet');
    this.water = game.add.audio('water');
    let bling = game.add.audio('bling');
    // let music = new Phaser.Sound(game,'water',1,true);
    this.water.volume -= 0.8;

    // Jury
    this.jury = game.add.sprite(game.width - 300, 70, 'jury');
    this.juryHappy = game.add.sprite(game.width - 301, 67, 'juryHappy');
    this.juryUnhappy = game.add.sprite(game.width - 301, 67, 'juryUnhappy');
    this.juryHappy.visible = false;
    this.juryUnhappy.visible = false;

    // Stance Nageuse
    this.pos1Nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(40), responsive.getHeightFromPercentage(54), 'pose1Nag1')
    this.pos1Nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(10), responsive.getHeightFromPercentage(43), 'pose1Nag2')
    this.pos1Nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(65), responsive.getHeightFromPercentage(43), 'pose1Nag3')
    this.pos2Nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(30), responsive.getHeightFromPercentage(54), 'pose2Nag1')
    this.pos2Nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(0), responsive.getHeightFromPercentage(45), 'pose2Nag2')
    this.pos2Nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(55), responsive.getHeightFromPercentage(45), 'pose2Nag3')
    this.pos3Nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(30), responsive.getHeightFromPercentage(54), 'pose3Nag1')
    this.pos3Nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(0), responsive.getHeightFromPercentage(43), 'pose3Nag2')
    this.pos3Nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(55), responsive.getHeightFromPercentage(43), 'pose3Nag3')    
    this.pos4Nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(38), responsive.getHeightFromPercentage(56), 'pose4Nag3')
    this.pos4Nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(10), responsive.getHeightFromPercentage(45), 'pose4Nag2')
    this.pos4Nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(65), responsive.getHeightFromPercentage(45), 'pose4Nag1')    

    this.arrPos = [
      [this.pos1Nageuse, this.pos1Nageuse3, this.pos1Nageuse2], 
      [this.pos2Nageuse, this.pos2Nageuse3, this.pos2Nageuse2],
      [this.pos3Nageuse, this.pos3Nageuse3, this.pos3Nageuse2],
      [this.pos4Nageuse, this.pos4Nageuse3, this.pos4Nageuse2],
    ];
    
    for(let i = 0; i<this.arrPos.length; i++){
      for(let u = 0; u<this.arrPos[i].length; u++){
        this.arrPos[i][u].visible = false;
        this.arrPos[i][u].scale.setTo(0.4);
      }
    }
    this.pos4Nageuse.scale.setTo(0.5);
    this.pos4Nageuse2.scale.setTo(0.5);
    this.pos4Nageuse3.scale.setTo(0.5);

    let dead1 = this.game.add.sprite(responsive.getWidthFromPercentage(41), responsive.getHeightFromPercentage(55), 'dead1')
    let dead2 = this.game.add.sprite(responsive.getWidthFromPercentage(67), responsive.getHeightFromPercentage(45), 'dead2')
    let dead3 = this.game.add.sprite(responsive.getWidthFromPercentage(9), responsive.getHeightFromPercentage(45), 'dead3')
    dead1.animations.add('run')
    dead2.animations.add('run')
    dead3.animations.add('run')
    dead1.scale.setTo(0.7)
    dead2.scale.setTo(0.7)
    dead3.scale.setTo(0.7)
    dead1.visible = false;
    dead2.visible = false;
    dead3.visible = false;
    let deadArr = [dead1,dead2,dead3];

    // Nageuse
    this.nageuse = this.game.add.sprite(responsive.getWidthFromPercentage(45), responsive.getHeightFromPercentage(55), 'nageuse1')
    this.nageuse2 = this.game.add.sprite(responsive.getWidthFromPercentage(10), responsive.getHeightFromPercentage(45), 'nageuse2')
    this.nageuse3 = this.game.add.sprite(responsive.getWidthFromPercentage(70), responsive.getHeightFromPercentage(45), 'nageuse3')
    let nageuseArr = [this.nageuse, this.nageuse3, this.nageuse2];
    this.nageuse.animations.add('run')
    this.nageuse2.animations.add('run')
    this.nageuse3.animations.add('run')
    this.nageuse.play('run', 8, true)
    this.nageuse2.play('run', 8, true)
    this.nageuse3.play('run', 8, true)

    //Stars
    this.star = this.game.add.sprite(responsive.getWidthFromPercentage(45), responsive.getHeightFromPercentage(55), 'star')
    this.star2 = this.game.add.sprite(responsive.getWidthFromPercentage(70), responsive.getHeightFromPercentage(40), 'star')    
    this.star3 = this.game.add.sprite(responsive.getWidthFromPercentage(15), responsive.getHeightFromPercentage(40), 'star')
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
    let newRecord = game.add.sprite(game.world.centerX, 70, 'newRecord');
    this.fail = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'fail');
    this.perfect = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'perfect');
    this.record.anchor.setTo(0.5);
    newRecord.anchor.setTo(0.5);
    newRecord.visible = false;
    this.fail.anchor.setTo(0.5);
    this.perfect.anchor.setTo(0.5);

    let styleRecord = {font:'1.6em Nunito',fill: "#ffffff"};
    let styleScoreFinal = {font: "14em Nunito", fill: "#ffffff", align: "center", boundsAlignV: "middle"};
    let styleScore = {font: "4.5em Nunito", fill: "#ffffff", align: "center", boundsAlignV: "middle"};
    this.rec = (localStorage.getItem('record') ? parseFloat(localStorage.getItem('record')) : 5 );

    this.textScore = game.add.text(game.world.centerX, 50, '0', styleScore);
    let textScoreFinal = game.add.text(game.world.centerX, 80, '0', styleScoreFinal);
    this.textRecord = game.add.text(game.world.centerX - 45,  22, 'RECORD :', styleRecord);
    let textFail = game.add.text(game.world.centerX,  game.world.centerY + 202, 'Raté', styleRecord);
    let textPerfect = game.add.text(game.world.centerX,  game.world.centerY + 202, 'Parfait', styleRecord);
    var oldRecord = 5;
    
    this.textRecord.text = 'Record : ' + this.rec;
    this.textScore.anchor.setTo(0.5, 0);
    textScoreFinal.anchor.setTo(0.5, 0);
    this.textScore.stroke = '#69629A';
    textScoreFinal.stroke = '#69629A';
    this.textScore.strokeThickness = 4;
    textScoreFinal.strokeThickness = 8;

    textFail.anchor.setTo(0.5);
    textPerfect.anchor.setTo(0.5);
    textFail.visible = false;
    textPerfect.visible = false;
    this.perfect.visible = false;
    textScoreFinal.visible = false;
    this.fail.visible = false;

    //Circle
    this.circle1 = game.add.sprite(responsive.getWidthFromPercentage(4), responsive.getHeightFromPercentage(83.5), 'oval')
    this.circle2 = game.add.sprite(responsive.getWidthFromPercentage(29), responsive.getHeightFromPercentage(83.5), 'oval')
    this.circle3 = game.add.sprite(responsive.getWidthFromPercentage(54), responsive.getHeightFromPercentage(83.5), 'oval')
    this.circle4 = game.add.sprite(responsive.getWidthFromPercentage(79), responsive.getHeightFromPercentage(83.5), 'oval')

    this.circleArr = [this.circle1, this.circle2, this.circle3, this.circle4];

    this.circle1.inputEnabled = true;
    this.circle2.inputEnabled = true;
    this.circle3.inputEnabled = true;
    this.circle4.inputEnabled = true;

    this.circle1.visible = false;
    this.circle2.visible = false;
    this.circle3.visible = false;
    this.circle4.visible = false;
  
    this.circle1.events.onInputDown.add(perfect, this);
    this.circle2.events.onInputDown.add(perfect, this);
    this.circle3.events.onInputDown.add(perfect, this);
    this.circle4.events.onInputDown.add(perfect, this);

    //Button
    let btn1 = game.add.sprite(responsive.getWidthFromPercentage(6.2), responsive.getHeightFromPercentage(85), 'btn1');
    let btn2 = game.add.sprite(responsive.getWidthFromPercentage(31.2), responsive.getHeightFromPercentage(85), 'btn2');
    let btn3 = game.add.sprite(responsive.getWidthFromPercentage(56.2), responsive.getHeightFromPercentage(85), 'btn3');
    let btn4 = game.add.sprite(responsive.getWidthFromPercentage(81.2), responsive.getHeightFromPercentage(85), 'btn4');
    btn1.scale.setTo(0.5, 0.5)
    btn2.scale.setTo(0.5, 0.5)
    btn3.scale.setTo(0.5, 0.5)
    btn4.scale.setTo(0.5, 0.5)

    let btnArray = [btn1, btn2, btn3, btn4];

    //Heart
    let heart1 = game.add.sprite(game.width - 50, 20, 'coeur');
    let heart2 = game.add.sprite(game.width - 80, 20, 'coeur');
    let heart3 = game.add.sprite(game.width - 110, 20, 'coeur');
    heart1.scale.setTo(1.2, 1.2);
    heart2.scale.setTo(1.2, 1.2);
    heart3.scale.setTo(1.2, 1.2);
    let heart = [heart1, heart2, heart3];
  
    // Create menu
    this.image = game.add.sprite(20, 20, 'pause');
    let share = game.add.sprite(game.width - 70, 20, 'share');
    share.visible = false;
    this.image.visible = false;
    this.image.inputEnabled = true;
    this.image.events.onInputDown.add(listener, this);

    let graphics = this.game.add.graphics();
    graphics.beginFill(0x000000, 0.5);
    graphics.drawRect(0, 0, game.width, 2000);
    graphics.visible = false;
    
    this.time = 3;
    this.countDown = setInterval(()=>{
      if (store.state.tutoOK) {
        this.time--
        this.textCountDown.text = this.time;
        if(this.time == 0){
          this.sifflet.play();
        }
      }
    },1000);
    
    let style = { font: "5em Nunito", fill: "#ffffff", align: "center" };
    
    let styleCountDown = {font: "14em Nunito", fill: "#F4426D", align: "center", boundsAlignV: "middle"};
    this.textCountDown = game.add.text(game.world.centerX, game.world.centerY, '3', styleCountDown);
    this.textCountDown.anchor.setTo(0.5)
    this.textCountDown.stroke = '#C53054';
    this.textCountDown.strokeThickness = 12;

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
   
    // Element for mobile device in 18/9
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
    divSty.marginTop = "-10px";
    divSty.height = "100%";
    divSty.width = "100%";
    divSty.background = "#000000";
    divSty.opacity = "0.5";

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
      this.image.visible = false;
    }  

    function unpaused(){
      divSty.display = "none";
      game.paused = false;
      play.visible = false;
      home.visible = false;
      graphics.visible = false;
      text.visible = false;
      this.image.visible = true;
    }

    //Test random circle

    var numCircle;
    this.superCircle = false;
    game.time.events.loop(Phaser.Timer.SECOND, setRandom, this);

    function setRandom(){
      this.timeRandom = 4
      if(this.score > 2){
        this.timeRandom += 4
      }
      if(this.score > 40){
        this.timeRandom = 2
      }
      if(this.score > 80){
        this.timeRandom = 1
      }
      if(this.score > 120){
        this.timeRandom -= 0.5
      }
      if(this.score > 300){
        this.timeRandom -= 0.5
      }
    }
    
    let cirLength = this.circleArr.length -1;
    this.sec = 2;
    var myLoop1 = game.time.events.loop(Phaser.Timer.SECOND * this.life, setNumCircle, this);
    
    function setNumCircle(){
      console.log('time' + this.timeRandom)
      numCircle = Math.round(Math.random() * 2);
    }
    var myLoop2 = game.time.events.loop(Phaser.Timer.SECOND * this.life, displayCircle, this);
    
    // var myLoop2 = game.time.events.loop(Phaser.Timer.SECOND * Math.round(Math.random() * timeRandom) +2, displayCircle, this);
    let pointSuperCircle = [20, 40];

    function displayCircle(e){
      if(this.textScore.text >= pointSuperCircle[0]){
        pointSuperCircle.push(pointSuperCircle[1] + 20)
        pointSuperCircle.shift();
        this.superCircle = true;
      }
      let last = this.spawnArr[this.spawnArr.length-1]
      if(this.superCircle){
        this.spawnArr.push(1);
        this.spawnArr.push(1);
        this.spawnArr.push(1);
        
        var showCircle = Math.round(Math.random() * cirLength);  
        var otherCircle = showCircle +1;
        var anotherCircle = showCircle +2;
        if((otherCircle) > (this.circleArr.length - 1)){
          otherCircle -=2;
        }
        if((anotherCircle) > (this.circleArr.length - 1)){
          anotherCircle -=3;
        }

        this.circleArr[showCircle].visible = true;
        this.circleArr[anotherCircle].visible = true;
        this.circleArr[otherCircle].visible = true;
        
        this.superCircle = false;
      }else{
        if(numCircle == 2){
          this.spawnArr.push(1);
          this.spawnArr.push(1);
          var showCircle = Math.round(Math.random() * cirLength);
          
          var otherCircle = showCircle +1;
          if((otherCircle) > (this.circleArr.length - 1)){
            otherCircle -=2;
          }

          this.circleArr[showCircle].visible = true;
          this.circleArr[otherCircle].visible = true;
        }else{
          this.spawnArr.push(1);
          var showCircle = Math.round(Math.random() * cirLength);
          
          this.circleArr[showCircle].visible = true;
        }
      }
        setTimeout(()=>{
          this.circleArr[showCircle].visible = false;
          (otherCircle != undefined) ? this.circleArr[otherCircle].visible = false : '';
          (anotherCircle != undefined) ? this.circleArr[anotherCircle].visible = false : '';
          if(this.clickArr.length != this.spawnArr.length){
    
            //Fail to refactor (call function in function ?)
            if(this.perfect.visible == true){
              this.perfect.visible = false;
              textPerfect.visible = false;
            }
            bouh.play();
            this.fail.visible = true;
            this.juryUnhappy.visible = true;
            this.jury.visible = false;
            textFail.visible = true;
            setTimeout(()=>{
              this.fail.visible = false;
              this.jury.visible = true;
              this.juryUnhappy.visible = false;
              textFail.visible = false;
            }, 1000)
            heart[this.life-1].visible = false;
            nageuseArr[this.life-1].kill();

            for(let i = 0; i<=this.arrPos[this.life].length; i++){
              this.arrPos[i][this.life-1].kill();
            }
            deadArr[this.life-1].visible = true;
            deadArr[this.life-1].play('run', 8)

            setTimeout(()=>{
              deadArr[this.life].visible = false;
            }, 1000)
            
            starArray[this.life-1].kill();
            this.life--;
      
            if(this.life == 0){
              if(this.textScore.text >= oldRecord) {
                newRecord.visible = true;
                localStorage.setItem('record', this.textScore.text);
              }
              this.water.pause();
              game.time.events.remove(myLoop1);
              game.time.events.remove(myLoop2);
              textScoreFinal.text = this.textScore.text;
              this.image.visible = false;
              this.textScore.visible = false;
              this.textRecord.visible = false;
              this.record.visible = false;
              share.visible = true;
              textScoreFinal.visible = true;
              for(var i = 0; i<btnArray.length; i++){
                btnArray[i].visible = false;
              }
              for(var i = 0; i<this.circleArr.length; i++){
                this.circleArr[i].visible = false;
              }
            }
            
            //Re-balancing of length
            if(this.spawnArr.length > this.clickArr.length){
              let diff = this.spawnArr.length - this.clickArr.length;
              (diff == 1) ? this.clickArr.push(2) : this.clickArr.push.apply(this.clickArr,[2, 2]);
            }else if(this.spawnArr.length < this.clickArr.length){
              let diff = this.clickArr.length - this.spawnArr.length;
              (diff == 2) ? this.spawnArr.push(2) : this.spawnArr.push.apply(this.spawnArr,[2, 2]);
            }
          }
        }, 1000);
    }

    //Check if two arrays are equals
    Array.prototype.equals = function (array) {
      if (!array)
          return false;
      if (this.length != array.length)
          return false;
      for (var i = 0, l=this.length; i < l; i++) {
          if (this[i] instanceof Array && array[i] instanceof Array) {
              if (!this[i].equals(array[i]))
                  return false;       
          }           
          else if (this[i] != array[i]) { 
              return false;   
          }           
      }       
    return true;
    }

    Object.defineProperty(Array.prototype, "equals", {enumerable: false});
    let ten = [1,1,1,1,1,1,1,1,1,1];
    let twenty = [1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1]
    var canChange;
    function perfect(e){
      e.visible = false;
      bling.play();
      this.perfect.visible = true;
      this.juryHappy.visible = true;
      this.jury.visible = false;
      textPerfect.visible = true;
      this.clickArr.push(1);
      
      setTimeout(()=>{
        this.perfect.visible = false;
        this.jury.visible = true;
        this.juryHappy.visible = false;
        textPerfect.visible = false;
      }, 1000)
      if(this.clickArr.slice(this.clickArr.length-11, this.clickArr.length-1).equals(ten)){
        this.score += 10;
        this.clickArr.push(3);
        this.spawnArr.push(3);
      }else if((this.clickArr.slice(this.clickArr.length-21, this.clickArr.length-1).equals(twenty))){
        this.score += 20;
        this.spawnArr.push(2);
        this.clickArr.push(2);
      }else{
        this.score += 1;
      }
            
      this.textScore.text = this.score;
      if(this.score > this.rec){
        this.textRecord.text = 'Record : ' + this.score;
      }
      let v = Math.round(Math.random() * 2);
      let k = Math.round(Math.random() * 3);
      

      for(let u = 0; u< this.life; u++){
        if(!canChange){
          this.arrPos[k][u].visible = true;
        }
      }
      canChange = true;

      for(var i = 0; i < this.life; i++ ){
        starArray[i].visible = true;
        nageuseArr[i].visible = false;
        starArray[i].play('run', 8)
      }
      setTimeout(()=>{
        for(var i = 0; i < this.life; i++ ){
          this.arrPos[k][i].visible = false;
          starArray[i].visible = false;
          nageuseArr[i].visible = true;
          canChange = false
        }
      }, 500)
    }
    store.commit('isSwimmingLoaded', true)
    const destroyGame = setInterval(function () {
      if (!store.state.swimmingGame) {
        game.state.destroy()
        game.sound.destroy()
        game.scale.destroy()
        game.stage.destroy()
        game.input.destroy()
        game.physics.destroy()
        game.plugins.destroy()
        clearInterval(destroyGame)
      }
    }, 500)
  }

  createText(){
    this.textScore.font = "Nunito"
  }

  update () {
    // Condition to review
    //Use if/else for performance and not switch
    if(this.time == -1){
      clearInterval(this.countDown)
      this.textCountDown.visible = false;
      this.image.visible = true;
      this.water.play();
    }
    if(this.life == 0){
      store.commit('swimmingFinish', true)
      this.water.pause();
    }
  }
}