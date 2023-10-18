import {CST} from "../CST"
import { MenuScene } from "./MenuScene";
import { TitleScene } from "./TitleScene"
import { Game } from "./Game";
import { GameBackground } from "./gameBackground";

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
    this.scene.add(CST.SCENES.MENU, MenuScene, false);
    this.scene.add(CST.SCENES.TITLE,TitleScene,false);
    this.scene.add(CST.SCENES.GAME,Game,false);
    this.scene.add(CST.SCENES.BACKGROUND,GameBackground,false);
    //this.scene.start(CST.SCENES.TITLE,"Let there be light!");
    this.scene.start(CST.SCENES.BACKGROUND);
    this.scene.start(CST.SCENES.GAME);
    this.scene.start(CST.SCENES.MENU, "helloWorld");
    
  }
}