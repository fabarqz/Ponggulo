import {CST} from "../CST"
import WebFontFile from "./webFontfile";
import { GameBackground } from "./gameBackground";
export class TitleScene extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.TITLE
    })
  }
  init(){

  }
  preload(){
    const fonts=new WebFontFile(this.load,['Pixelify Sans','Press Start 2P']);
    this.load.addFile(fonts);
  }
  create(){
    const textStyle=
    {
      fontSize:80,
      fontFamily:'"Pixelify Sans"'
    }

    const title=this.add.text(400,250,'PongGulo',textStyle).setOrigin(0.54,0.5);
    const startPrompt=this.add.text(400,300,'Press Enter to start',{fontSize:20,fontFamily:textStyle.fontFamily}).setOrigin(-0.05);

    this.input.keyboard.on('keydown-ENTER',()=>{
      console.log('Space pressed');
      
      this.scene.start(CST.SCENES.BACKGROUND);
      this.scene.start(CST.SCENES.GAME);
    })
  }

}