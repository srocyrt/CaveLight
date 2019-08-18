import { GAME_CONST } from '../game_const';

export class ParallaxBackground extends Phaser.GameObjects.TileSprite {
  constructor(scene, textureKey, frameKey, zIndex, scale) {
    super(
      scene,
      0,
      0,
      GAME_CONST.CONFIGS.GAME_WIDTH,
      GAME_CONST.CONFIGS.GAME_HEIGHT,
      textureKey,
      frameKey
    );
    this.setOrigin(0);
    this.setScrollFactor(0);
    this.setDepth(zIndex);
    this.scaleFactor = scale;
    scene.sys.displayList.add(this);
  }
  update() {
    this.tilePositionX = this.scene.sys.cameras.main.scrollX * this.scaleFactor;
    this.tilePositionY = this.scene.sys.cameras.main.scrollY * 0;
  }
}
