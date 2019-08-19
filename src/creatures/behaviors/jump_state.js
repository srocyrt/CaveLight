import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class JumpState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    // todo half v if release space
    this.isVelocityHalved = false;
    // todo animation framerate
    this.owner.playAnimation(GAME_CONST.ANIMATIONS.JUMP);
    this.owner.body.velocity.y = -300;
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
  }
  exit() {
    // vy = 0?
  }
}
