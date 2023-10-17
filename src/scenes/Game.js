/**@type {Phaser.Physics.Arcade.StaticBody} */

import {CST} from "../CST"

export class Game extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.GAME
    })
  }
  init(){
    this.paddleRightVelocity=new Phaser.Math.Vector2(0,0);
    this.leftScore=0;
    this.rightScore=0;
  }
  preload(){

  }
  create(){

    this.physics.world.setBounds(-100,0,1000,500)
    this.ball=this.add.circle(400,250,10,0xffffff,1);
    this.ball2=this.add.circle(300,150,15,0x0000cc,1);
    this.ball3=this.add.circle(450,300,20,0xffea00,1);
    this.paddleLeft=this.add.rectangle(20,220,20,100,0xf40000,1);
    this.paddleRight=this.add.rectangle(780,220,20,100,0xffffff,1);
    this.cursors=this.input.keyboard.createCursorKeys();
    this.ball.setPosition(400,250);
    
    const angel=Phaser.Math.Between(0,360);
    const vec=this.physics.velocityFromAngle(angel);
    const ballSpeed=5;

    this.physics.add.existing(this.ball);
    this.physics.add.existing(this.ball2);
    this.physics.add.existing(this.ball3);
    this.physics.add.existing(this.paddleLeft,true);
    this.physics.add.existing(this.paddleRight,true);

    this.resetBall();

    //this.ball.body.setVelocity(vec.x*ballSpeed,vec.y*ballSpeed);
    this.ball.body.setCollideWorldBounds(true);
    this.ball.body.setBounce(1,1);
    this.ball2.body.setCollideWorldBounds(true,1,1);
    //this.ball2.body.setVelocity(-vec.x*ballSpeed*0.75,vec.y*ballSpeed*0.75);
    this.ball2.body.setBounce(1,1);
    this.ball3.body.setCollideWorldBounds(true,1,1);
    //this.ball3.body.setVelocity(-vec.x*ballSpeed*1.2,vec.y*ballSpeed*1.2);
    this.ball3.body.setBounce(1,1);

    this.physics.add.collider(this.ball,this.ball2);
    this.physics.add.collider(this.ball,this.ball3);
    this.physics.add.collider(this.ball2,this.ball3);
    this.physics.add.collider(this.paddleLeft,this.ball);
    this.physics.add.collider(this.paddleLeft,this.ball2);
    this.physics.add.collider(this.paddleLeft,this.ball3);

    this.physics.add.collider(this.paddleRight,this.ball);
    this.physics.add.collider(this.paddleRight,this.ball2);
    this.physics.add.collider(this.paddleRight,this.ball3);

    const textStyle=
      {
        fontSize:60
      }
    
    this.add.text(300,55,'You',{fontSize:40}).setOrigin(0.5,0.5)
    this.leftScoreLabel=this.add.text(300,125,'0',textStyle).setOrigin(0.5,0.5)
    this.add.text(500,445,'Computer',{fontSize:40}).setOrigin(0.5,0.5)
    this.RightScoreLabel=this.add.text(500,375,'0',textStyle).setOrigin(0.5,0.5)
    
  }

  update(){
    
    const ball=this.ball.body;
    const body=this.paddleLeft.body;
    const aiBody=this.paddleRight.body
    const diff=this.ball.y-this.paddleRight.y
    const aiSpeed=2;
    

    if(this.cursors.down.isDown){
      console.log('down');
      this.paddleLeft.y+=10;
      if(this.paddleLeft.y>=500){
        this.paddleLeft.y-=80;
      }
      body.updateFromGameObject();

    }
    else if(this.cursors.up.isDown){
      console.log('up');
      this.paddleLeft.y-=10;
      if(this.paddleLeft.y<=0){
        this.paddleLeft.y+=80;
      }
      body.updateFromGameObject();
    }

    //simple score handling
    if(ball.x<=0){
      console.log('right side score');
      this.incrementRightScore();
      this.resetBall();
    }
    if(ball.x>=780){
      console.log('left side score');
      this.incrementLeftScore();
      this.resetBall();
    }

    //tracking logic for right paddle to simulate computer player
    if(diff<0){
      this.paddleRightVelocity.y=-aiSpeed;
      if(this.paddleRightVelocity.y<-10){
        this.paddleRightVelocity.y=-10;
      }
    }else if (diff>0){
      this.paddleRightVelocity.y=+aiSpeed;
      if(this.paddleRightVelocity.y<-10){
        this.paddleRightVelocity.y=+10;
      }
    }

    this.paddleRight.y+=this.paddleRightVelocity.y;
    aiBody.updateFromGameObject();
  }

  incrementRightScore(){
    this.rightScore+=1;
    this.RightScoreLabel.text=this.rightScore.toString();
  }
  incrementLeftScore(){
    this.leftScore+=1;
    this.leftScoreLabel.text=this.leftScore.toString();
  }
  resetBall(){
    this.ball.setPosition(400,250);
    this.ball2.setPosition(300,150);
    this.ball3.setPosition(450,300);
    const angel=Phaser.Math.Between(0,360);
    const vec=this.physics.velocityFromAngle(angel);
    const ballSpeed=5;
    this.ball.body.setVelocity(vec.x*ballSpeed,vec.y*ballSpeed);
    this.ball2.body.setVelocity(-vec.x*ballSpeed*0.75,vec.y*ballSpeed*0.75);
    this.ball3.body.setVelocity(-vec.x*ballSpeed*1.2,vec.y*ballSpeed*1.2);
  }
}
