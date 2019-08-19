import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class FallState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    this.owner.playAnimation(GAME_CONST.ANIMATIONS.FALL);
  }
  update(input) {
    let acceleration = 0;
    if (input.cursors.left.isDown || input.cursors.right.isDown) {
      const sign = this.owner.flipX ? -1 : 1;
      acceleration = sign * GAME_CONST.ADVENTURER_CONST.ACCELERATION;
    }
    this.owner.body.velocity.x += acceleration / 10;
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
  }
  exit() {}
}
