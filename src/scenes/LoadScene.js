import {CST} from "../CST"
import { MenuScene } from "./MenuScene";
import { TitleScene } from "./TitleScene"
import { Game } from "./Game";
import { GameBackground } from "./gameBackground";
import { GameOver } from "./GameOverScene";
import { Preload } from "./Preload";

export class LoadScene extends Phaser.Scene{
  constructor(){
    super({
      key:CST.SCENES.LOAD
    })
  }
  init(){

  }
  preload(){

  }
  create(){
    this.scene.add(CST.SCENES.BACKGROUND,GameBackground,false);
    
    this.scene.add(CST.SCENES.PRELOAD,Preload,false);
    this.scene.add(CST.SCENES.MENU, MenuScene, false);
    this.scene.add(CST.SCENES.TITLE,TitleScene,false);
    this.scene.add(CST.SCENES.GAME,Game,false);
    this.scene.add(CST.SCENES.GAMEOVER,GameOver,false); 

    
    this.scene.sendToBack(CST.SCENES.BACKGROUND);
    this.scene.start(CST.SCENES.TITLE);
    
  }

}