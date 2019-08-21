import Phaser from 'phaser';
import { GAME_CONST } from './game_const';
import { LoadScene } from './scenes/load_scene';
import { MenuScene } from './scenes/menu_scene';
import { GameScene } from './scenes/game_scene';

let config = {
  width: GAME_CONST.CONFIGS.GAME_WIDTH,
  height: GAME_CONST.CONFIGS.GAME_HEIGHT,
  zoom: 3,
  scene: [LoadScene, MenuScene, GameScene],
  render: {
    pixelArt: true
  },
  banner: false,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 700
      },
      debug: GAME_CONST.DEBUG && process.env.NODE_ENV != 'production'
    }
  }
};

window.onload = function() {
  let game = new Phaser.Game(config);
  if (process.env.NODE_ENV !== 'production') {
    window.game = game;
  }
};
