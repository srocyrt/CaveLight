export class Creature extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, config) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.creature = texture;
    scene.sys.displayList.add(this);
    scene.sys.updateList.add(this);
    scene.physics.world.enableBody(this);
    if (config) {
      this.health = config.health;
    }
  }
  playAnimation(key) {
    return this.anims.play(`${this.creature}_${key}`, true);
  }
}
