import Phaser from 'phaser';
import { CST } from '../CST';
import WebFontFile from "./webFontfile";

export class Preload extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.PRELOAD
    })
  }
  init(){
    
  }
  preload(){
    const fonts=new WebFontFile(this.load,['Pixelify Sans','Press Start 2P']);
    this.load.addFile(fonts);
    this.paddleLeft=this.add.rectangle(20,220,20,100,0xf40000,1);
  }
  create(){
    this.scene.start(CST.SCENES.TITLE);
  }
}