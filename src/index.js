import Phaser from 'phaser';
import { GAME_CONST } from './game_const';
import { LoadScene } from './scenes/load_scene';
import { GameScene } from './scenes/game_scene';

let config = {
  width: GAME_CONST.CONFIGS.GAME_WIDTH,
  height: GAME_CONST.CONFIGS.GAME_HEIGHT,
  zoom: 3,
  scene: [LoadScene, GameScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 700
      }
      // debug: process.env.NODE_ENV != 'production'
    }
  }
};

window.onload = function() {
  window.game = new Phaser.Game(config);
};
