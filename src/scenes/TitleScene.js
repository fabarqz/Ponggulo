import {CST} from "../CST"

export class TitleScene extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.TITLE
    })
  }
  init(){

  }
  preload(){

  }
  create(data){
    let text=this.add.text(400,250,data);
    text.setOrigin(0.5,0.5);
  }

}