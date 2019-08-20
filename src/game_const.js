export const GAME_CONST = {
  DEBUG: false,
  CONFIGS: {
    GAME_WIDTH: 384,
    GAME_HEIGHT: 192 //216
  },
  SCENES: {
    LOAD: 'loadScene',
    MENU: 'menuScene',
    GAME: 'gameScene'
  },
  CREATURES: {
    ADVENTURER: 'adventurer',
    SLIME_BLUE: 'slime_blue',
    SLIME_RED: 'slime_red',
    SLIME_GREEN: 'slime_green'
  },
  STATES: {
    IDLE: 'idle',
    WALK: 'walk',
    RUN: 'run',
    JUMP: 'jump',
    FALL: 'fall',
    KNOCK_DOWN: 'knock_down',
    DOUBLE_JUMP: 'double_jump',
    FACING_RIGHT: 'facing_right',
    FACING_LEFT: 'facing_left'
  },
  ADVENTURER_CONST: {
    DAMPING: 0.7,
    ACCELERATION: 700,
    JUMP_VELOCITY: 300,
    DOUBLE_JUMP_VELOCITY: 250,
    JUMP_TOLERATION: 100,
    EDGE_TOLERATION: 100
  }
};

export const ANIMATION_CONST = {
  IDLE: 'idle',
  // WALK: 'walk',
  RUN: 'run',
  JUMP_ANTICIPATION: 'jump_anticipation',
  JUMP: 'jump',
  JUMP_MID_AIR: 'jump_mid_air',
  DOUBLE_JUMP_ANTICIPATION: 'double_jump_anticipation',
  FALL: 'fall',
  KNOCK_DOWN: 'knock_down',
  ATTACK_A_ANTICIPATION: 'attack_a_anticipation',
  ATTACK_A: 'attack_a',
  ATTACK_B_ANTICIPATION: 'attack_b_anticipation',
  ATTACK_B: 'attack_b',
  ATTACK_C_ANTICIPATION: 'attack_c_anticipation',
  ATTACK_C: 'attack_c',
  AIR_ATTACK_A_ANTICIPATION: 'attack_a_anticipation',
  AIR_ATTACK_A: 'attack_a',
  AIR_ATTACK_B_ANTICIPATION: 'attack_b_anticipation',
  AIR_ATTACK_B: 'attack_b',
  AIR_ATTACK_C_ANTICIPATION: 'attack_c_anticipation',
  AIR_ATTACK_C: 'attack_c',
  AIR_ATTACK_D_ANTICIPATION: 'air_attack_d_anticipation',
  AIR_ATTACK_D: 'air_attack_d'
};
