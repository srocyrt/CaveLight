import { State } from './state';
import { GAME_CONST, ANIMATION_CONST } from '../../game_const';

export class KnockDownState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    this.owner.playAnimation(ANIMATION_CONST.KNOCK_DOWN);
  }
  update() {
    // const sign = this.owner.flipX ? -1 : 1;
    this.owner.body.velocity.x +=
      (sign * GAME_CONST.ADVENTURER_CONST.ACCELERATION) / 10;
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
  }
  exit() {}
}
