import { State } from './state';
import { GAME_CONST, ANIMATION_CONST } from '../../game_const';

export class JumpState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter(input) {
    Phaser.Input.Keyboard.JustDown(input.cursors.up);
    input.extraJump = 1;
    // half v if release up
    this.isVelocityHalved = false;
    // animation framerate
    this.owner.body.velocity.y = -GAME_CONST.ADVENTURER_CONST.JUMP_VELOCITY;
    this.double_jump_listen = false;
    this.isAnticipationState = true;
    this.isJumpState = false;
    this.isMidAirState = false;
  }
  update(input) {
    // left & right movement
    let acceleration = 0;
    if (input.cursors.left.isDown || input.cursors.right.isDown) {
      const sign = this.owner.flipX ? -1 : 1;
      acceleration = sign * GAME_CONST.ADVENTURER_CONST.ACCELERATION;
    }
    this.owner.body.velocity.x += acceleration / 10;
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
    // halve velocity after up releasing
    if (input.cursors.up.isUp && !this.isVelocityHalved) {
      this.isVelocityHalved = true;
      this.owner.body.velocity.y /= 3 / 2;
    }
    // smooth jump animation
    if (this.isAnticipationState) {
      this.owner.playAnimation(ANIMATION_CONST.JUMP_ANTICIPATION);
      if (
        this.owner.body.velocity.y >=
        -GAME_CONST.ADVENTURER_CONST.JUMP_VELOCITY * 0.85
      ) {
        this.isAnticipationState = false;
        this.isJumpState = true;
      }
    } else if (this.isJumpState) {
      this.owner.playAnimation(ANIMATION_CONST.JUMP);
      if (
        this.owner.body.velocity.y >=
        -GAME_CONST.ADVENTURER_CONST.JUMP_VELOCITY * 0.4
      ) {
        this.double_jump_listen = true;
        this.isJumpState = false;
        this.isMidAirState = true;
      }
    } else if (this.isMidAirState) {
      this.owner.playAnimation(ANIMATION_CONST.JUMP_MID_AIR);
    } else {
      // TODO throw exception ?
      console.debug(`Something goes wrong in DoubleJumpState`);
    }
  }
  exit() {}
}
