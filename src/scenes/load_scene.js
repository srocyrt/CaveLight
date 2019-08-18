import { GAME_CONST } from '../game_const';
import background_PNG from '../assets/background/background.png';
import background_JSON from '../assets/background/background.json';
import adventurer_PNG from '../assets/sprite/sprite.png';
import adventurer_JSON from '../assets/sprite/sprite.json';
import slime_blue_PNG from '../assets/sprite/slime_blue.png';
import slime_blue_JSON from '../assets/sprite/slime_blue.json';
import tiles2x_PNG from '../assets/tile/tiles2x.png';
import tiles2x_transparent_PNG from '../assets/tile/tiles2x_transparent.png';
import level_0_JSON from '../assets/level/level_0.json';

export class LoadScene extends Phaser.Scene {
  constructor() {
    super(GAME_CONST.SCENES.LOAD);
  }
  preload() {
    // parallax background
    this.load.atlas({
      key: 'background',
      textureURL: background_PNG,
      atlasURL: background_JSON
    });

    // character sprite
    this.load.atlas({
      key: 'adventurer',
      textureURL: adventurer_PNG,
      atlasURL: adventurer_JSON
    });

    // slime blue
    this.load.atlas({
      key: 'slime_blue',
      textureURL: slime_blue_PNG,
      atlasURL: slime_blue_JSON
    });

    // tile map
    this.load.image('tiles2x', tiles2x_PNG);
    this.load.image('tiles2x_transparent', tiles2x_transparent_PNG);
    this.load.tilemapTiledJSON('level_0', level_0_JSON);
  }

  create() {
    // TODO: Add loading bar
    // create animation
    // adventurer idle
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${GAME_CONST.ANIMATIONS.IDLE}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-idle-0',
        start: 0,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer run
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${GAME_CONST.ANIMATIONS.RUN}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-run3-0',
        start: 0,
        end: 5
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer jump
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${GAME_CONST.ANIMATIONS.JUMP}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-jump-0',
        start: 0,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer fall
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${GAME_CONST.ANIMATIONS.FALL}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-fall-0',
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: `${GAME_CONST.CREATURES.SLIME_BLUE}_${GAME_CONST.ANIMATIONS.IDLE}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.SLIME_BLUE, {
        prefix: 'slimeblue_idle',
        start: 1,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: `${GAME_CONST.CREATURES.SLIME_BLUE}_${GAME_CONST.ANIMATIONS.RUN}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.SLIME_BLUE, {
        prefix: 'slimeblue_idle',
        start: 1,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });

    this.scene.start(GAME_CONST.SCENES.GAME);
  }
}
