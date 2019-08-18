import { GAME_CONST } from '../game_const';
import { Adventurer } from '../creatures/adventurer';
import { SlimeBlue } from '../creatures/slime_blue';
import { ParallaxBackground } from './parallax_background';

export class GameScene extends Phaser.Scene {
  constructor() {
    super(GAME_CONST.SCENES.GAME);
    this.backgroundList = [];
    this.creatureList = [];
  }
  preload() {}
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.createBackground();
    this.createCreature();

    // Create level map
    let map = this.add.tilemap('level_0');
    let tile = map.addTilesetImage('tiles2x');
    let tile_transparet = map.addTilesetImage('tiles2x_transparent');
    let layerBot = map.createStaticLayer('platform', [tile, tile_transparet]);
    layerBot.setCollisionByProperty({ collides: true });

    // Add collider
    //this.adventurer.setCollideWorldBounds(true);
    this.physics.add.collider(this.adventurer, layerBot);
    //this.physics.add.collider(this.blue, layerBot);
    // this.adventurer.body.setCollideWorldBounds(true);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.adventurer, true, 1, 1, 0, 40);
  }
  update() {
    // parallax scrolling effect
    this.backgroundList.forEach(element => element.update());

    //this.blue.update();
    this.adventurer.update();
    // this.adventurer.update( this.cursors );
    // 撞邊界會抖動
  }
  createBackground() {
    let texture = this.textures.get('background');
    for (let name of texture.getFrameNames()) {
      let data = texture.get(name).customData.parallax;
      let bg = new ParallaxBackground(
        this,
        'background',
        name,
        data.zindex,
        data.scale
      );
      this.backgroundList.push(bg);
    }
  }
  createCreature() {
    this.adventurer = new Adventurer(this, 100, 100);
    //this.blue = new SlimeBlue(this, 150, 100);
    this.creatureList.push(this.adventurer);
    //this.creatureList.push(this.blue);
  }
}
