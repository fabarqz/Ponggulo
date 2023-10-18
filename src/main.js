/**@type {import{"../typings/phaser"}} */

import Phaser from 'phaser';

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { TitleScene } from "./scenes/TitleScene";
import { GameBackground } from './scenes/gameBackground';

const config={
  width:800,
  height:500,
  type:Phaser.AUTO,
  backgroundColor:0x616161,
  scene:[LoadScene],
  physics:{
    default:'arcade',
    arcade:{
      gravity:{y:10},
      debug:true
    }
  }
}

let game=new Phaser.Game(config);