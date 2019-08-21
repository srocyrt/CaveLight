import { GAME_CONST, ANIMATION_CONST } from '../game_const';
import background_PNG from '../assets/background/background.png';
import background_JSON from '../assets/background/background.json';
import menu_scene_PNG from '../assets/sprite/menu_scene.png';
import menu_scene_JSON from '../assets/sprite/menu_scene.json';
import adventurer_PNG from '../assets/sprite/sprite.png';
import adventurer_JSON from '../assets/sprite/sprite.json';
import slime_blue_PNG from '../assets/sprite/slime_blue.png';
import slime_blue_JSON from '../assets/sprite/slime_blue.json';
import tiles_PNG from '../assets/tile/tiles.png';
import tutorial_JSON from '../assets/level/tutorial.json';

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
    // menu
    this.load.atlas({
      key: 'menuScene',
      textureURL: menu_scene_PNG,
      atlasURL: menu_scene_JSON
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
    this.load.image('tiles', tiles_PNG);
    this.load.tilemapTiledJSON('tutorial', tutorial_JSON);
  }

  create() {
    // TODO: Add loading bar
    // create animation
    // menu
    this.anims.create({
      key: `${GAME_CONST.SCENES.MENU}_play`,
      frames: this.anims.generateFrameNames(GAME_CONST.SCENES.MENU, {
        prefix: 'play_',
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key: `${GAME_CONST.SCENES.MENU}_settings`,
      frames: this.anims.generateFrameNames(GAME_CONST.SCENES.MENU, {
        prefix: 'settings_',
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: -1
    });
    // adventurer idle
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.IDLE}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-idle-2-0',
        start: 0,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer run
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.RUN}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-run3-0',
        start: 0,
        end: 5
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer  jump_anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.JUMP_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-jump-0',
        start: 0,
        end: 1
      }),
      frameRate: 30, // or 60
      repeat: -1
    });
    // adventurer jump
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.JUMP}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-jump-0',
        start: 2,
        end: 2
      }),
      frameRate: 6, // doesn't matter?
      repeat: -1
    });
    // adventurer jump_mid_air
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.JUMP_MID_AIR}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-jump-0',
        start: 3,
        end: 3
      }),
      frameRate: 6, // doesn't matter?
      repeat: -1
    });
    // adventurer double_jump_anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.DOUBLE_JUMP_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-smrslt-0',
        start: 0,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });
    // adventurer fall
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.FALL}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-fall-0',
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer knock_down
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${GAME_CONST.CREATURES.KNOCK_DOWN}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-knock-dwn-0',
        start: 0,
        end: 6
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer attack A anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_A_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack1-0',
        start: 0,
        end: 1
      }),
      frameRate: 18,
      repeat: 0
    });
    // adventurer attack A
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_A}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack1-0',
        start: 2,
        end: 4
      }),
      frameRate: 24,
      repeat: 0
    });
    // adventurer attack A follow through
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_A_FOLLOW_THROUGH}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack2-0',
        start: 0,
        end: 1
      }),
      frameRate: 16,
      repeat: 0
    });
    // adventurer attack B anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack2-0',
        start: 0,
        end: 2
      }),
      frameRate: 18,
      repeat: 0
    });
    // adventurer attack B
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack2-0',
        start: 3,
        end: 5
      }),
      frameRate: 24,
      repeat: 0
    });
    // adventurer attack B follow through
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B_FOLLOW_THROUGH}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack1-0',
        start: 0,
        end: 1
      }),
      frameRate: 16,
      repeat: 0
    });
    // adventurer attack C anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_C_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack3-0',
        start: 0,
        end: 1
      }),
      frameRate: 18,
      repeat: 0
    });
    // adventurer attack C
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_C}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack3-0',
        start: 2,
        end: 4
      }),
      frameRate: 24,
      repeat: 0
    });
    // adventurer attack C follow through
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_C_FOLLOW_THROUGH}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-attack3-0',
        start: 4,
        end: 4
      }),
      frameRate: 16,
      repeat: 0
    });
    // adventurer air attack A anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_A_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack1-0',
        start: 0,
        end: 0
      }),
      frameRate: 30, // doesn't matter?
      repeat: -1
    });
    // adventurer air attack A
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_A}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack1-0',
        start: 1,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer air attack B anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_B_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack1-0',
        start: 3,
        end: 3
      }),
      frameRate: 30, // doesn't matter?
      repeat: -1
    });
    // adventurer air attack B
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_B}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack2-0',
        start: 0,
        end: 2
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer air attack C anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_C_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack2-0',
        start: 2,
        end: 2
      }),
      frameRate: 30, // doesn't matter?
      repeat: -1
    });
    // adventurer air attack C
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_C}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack3-loop-0',
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });
    // adventurer air attack D anticipation
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_D_ANTICIPATION}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack3-rdy-0',
        start: 0,
        end: 0
      }),
      frameRate: 30, // doesn't matter?
      repeat: -1
    });
    // adventurer air attack D
    this.anims.create({
      key: `${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.AIR_ATTACK_D}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.ADVENTURER, {
        prefix: 'adventurer-air-attack3-end-0',
        start: 0,
        end: 2
      }),
      frameRate: 6,
      repeat: -1
    });

    // blue
    this.anims.create({
      key: `${GAME_CONST.CREATURES.SLIME_BLUE}_${ANIMATION_CONST.IDLE}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.SLIME_BLUE, {
        prefix: 'slimeblue_idle',
        start: 1,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: `${GAME_CONST.CREATURES.SLIME_BLUE}_${ANIMATION_CONST.RUN}`,
      frames: this.anims.generateFrameNames(GAME_CONST.CREATURES.SLIME_BLUE, {
        prefix: 'slimeblue_idle',
        start: 1,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });

    this.scene.start(GAME_CONST.SCENES.MENU);
  }
}
