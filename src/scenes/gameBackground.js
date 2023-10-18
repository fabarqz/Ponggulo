import Phaser from "phaser";
import {CST} from "../CST"

export class GameBackground extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.BACKGROUND
    })
  }
  preload(){

  }
  create(){
    console.log('Is this working?')
    this.add.line(400,250)
    this.add.line(0,0,400,0,400,1000,0xffffff,1);
    this.add.rectangle(0,0,15,1000,0xececec,1);
    this.add.rectangle(800,0,15,1000,0xececec,1);
    this.add.rectangle(0,0,1600,15,0xececec,1);
    this.add.rectangle(0,500,1600,15,0xececec,1);
  }
}