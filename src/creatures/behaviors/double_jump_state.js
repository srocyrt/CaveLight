import { State } from './state';
import { GAME_CONST, ANIMATION_CONST } from '../../game_const';

export class DoubleJumpState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter(input) {
    // todo animation framerate
    input.extraJump = 0;
    this.owner.playAnimation(ANIMATION_CONST.JUMP);
    this.owner.body.velocity.y = -GAME_CONST.ADVENTURER_CONST
      .DOUBLE_JUMP_VELOCITY;
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
    // smooth animation
    if (this.isAnticipationState) {
      this.owner.playAnimation(ANIMATION_CONST.DOUBLE_JUMP_ANTICIPATION);
      if (
        this.owner.body.velocity.y >=
        -GAME_CONST.ADVENTURER_CONST.DOUBLE_JUMP_VELOCITY * 0.5
      ) {
        this.isAnticipationState = false;
        this.isJumpState = true;
      }
    } else if (this.isJumpState) {
      this.owner.playAnimation(ANIMATION_CONST.JUMP);
      if (
        this.owner.body.velocity.y >=
        -GAME_CONST.ADVENTURER_CONST.DOUBLE_JUMP_VELOCITY * 0.1
      ) {
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
