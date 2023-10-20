import Phaser from "phaser";
import {CST} from "../CST"
import WebFontFile from "./webFontfile";
import { COLORS } from "../consts/Colors";
import { TitleScene } from "./TitleScene";

export class GameOver extends Phaser.Scene{
  /**
   * @param{{leftScore:number,rightScore:number}}
   */


  constructor(){
    super({
      key:CST.SCENES.GAMEOVER
    })
  }
  preload(){
    const fonts=new WebFontFile(this.load,['Pixelify Sans','Press Start 2P']);
    this.load.addFile(fonts);
  }
  create(data){
    let titleText='You lost.';

    if(data.leftScore>data.rightScore){
      //player won
      titleText='You won.'
    };

    this.add.text(400,200,titleText,{
      fontFamily:'"Pixelify Sans',
      fontSize:40
    }).setOrigin(0.5,0.5);

    this.add.text(400,300,"Press ENTER to try again",{
      fontFamily:'"Pixelify Sans',
      fontSize:40
    }).setOrigin(0.5,0.5);

    this.input.keyboard.once('keydown-ENTER',()=>{
      //location.reload();

      this.scene.start(CST.SCENES.LOAD);

      //i dont know how this works but it just works
      
      this.scene.remove(CST.SCENES.BACKGROUND);
      this.scene.remove(CST.SCENES.BACKGROUND);
    
      this.scene.remove(CST.SCENES.PRELOAD);
      this.scene.remove(CST.SCENES.MENU);
      this.scene.remove(CST.SCENES.TITLE);
      this.scene.remove(CST.SCENES.GAME);
      this.scene.remove(CST.SCENES.GAMEOVER); 
      
      
      
    })

  }
}