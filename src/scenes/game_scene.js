import { GAME_CONST } from '../game_const';
import { Adventurer } from '../creatures/adventurer';
import { SlimeBlue } from '../creatures/slime_blue';
import { ParallaxBackground } from './parallax_background';

export class GameScene extends Phaser.Scene {
  constructor() {
    super(GAME_CONST.SCENES.GAME);
    this.backgroundList = [];
    this.creatureList = [];
    this.platform = [];
    this.danger = [];
    this.map;
  }
  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.createBackground();
    this.map = this.createMap();
    this.createCreature();
    this.addCollider();
    /*
    // Create level map
    let map = this.add.tilemap('level_0');
    let tile = map.addTilesetImage('tiles2x');
    let tile_transparet = map.addTilesetImage('tiles2x_transparent');
    let layerBot = map.createStaticLayer('platform', [tile, tile_transparet]);
    layerBot.setCollisionByProperty({ collides: true });
    */

    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    this.cameras.main.startFollow(this.adventurer, true, 1, 1, 0, 40);
    //console.log(this.cameras.roundPixels);
  }
  create() {
    console.log('game start');
  }
  update() {
    //    console.log(this.bg.x, this.bg.y, this.adventurer.x, this.adventurer.y);
    this.backgroundList.forEach(element => element.update());
    this.creatureList.forEach(element => element.update());
  }
  createBackground() {
    // TODO webGL render problem for pixelart tilesprite
    //this.bg = this.add.image(0, 0, 'background', 'grassy_mountains').setOrigin(0);
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
  createMap() {
    let map = this.add.tilemap('tutorial');
    let tiles = map.addTilesetImage('tiles');
    let BackgroundLayer = map.createStaticLayer('Background', [tiles]);
    let platformLayer = map.createStaticLayer('Platform', [tiles]);
    let decorationLayer = map.createStaticLayer('Decoration', [tiles]);
    let dangerLayer = map.createStaticLayer('Danger', [tiles]);
    platformLayer.setCollisionByProperty({ collide: true });
    dangerLayer.setCollisionByProperty({ danger: true });
    this.platform.push(platformLayer);
    this.danger.push(dangerLayer);
    return map;
  }
  createCreature() {
    this.adventurer = new Adventurer(this, 80, 100);
    this.creatureList.push(this.adventurer);
  }
  addCollider() {
    // Add collider
    for (const c of this.creatureList) {
      for (const p of this.platform) {
        this.physics.add.collider(c, p);
      }
      for (const d of this.danger) {
        this.physics.add.collider(c, d);
      }
    }
  }
}
