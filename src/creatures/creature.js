export class Creature extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.creature = texture;
    scene.sys.displayList.add(this);
    scene.sys.updateList.add(this);
    scene.physics.world.enableBody(this);
  }
  playAnimation(key) {
    return this.anims.play(`${this.creature}_${key}`);
  }
}
