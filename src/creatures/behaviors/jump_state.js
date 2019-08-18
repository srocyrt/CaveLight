import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class JumpState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    this.isVelocityHalved = false;
    this.owner.playAnimation(GAME_CONST.ANIMATIONS.JUMP);
    this.owner.body.velocity.y = -300;
  }
  update() {
    const sign = this.owner.flipX ? -1 : 1;
    this.owner.body.velocity.x +=
      (sign * GAME_CONST.ADVENTURER_CONST.ACCELERATION) / 10;
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
  }
  exit() {
    // vy = 0?
  }
}
