import Phaser from 'phaser';

let config = {
  width: 600,
  height: 400,
  zoom: 3,
  scene: [LoadScene, MenuScene, GameScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      },
      debug: true
    }
  }
};

window.onload = function() {
  window.game = new Phaser.Game(config);
};
