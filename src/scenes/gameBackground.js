import Phaser from "phaser";
import {CST} from "../CST"
import { COLORS } from "../consts/Colors";

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
    this.add.line(0,0,400,0,400,1000,COLORS.WHITE,1);
    this.add.rectangle(0,0,15,1000,COLORS.LIGHTGRAY,1);
    this.add.rectangle(800,0,15,1000,COLORS.LIGHTGRAY,1);
    this.add.rectangle(0,0,1600,15,COLORS.LIGHTGRAY,1);
    this.add.rectangle(0,500,1600,15,COLORS.LIGHTGRAY,1);
  }
}