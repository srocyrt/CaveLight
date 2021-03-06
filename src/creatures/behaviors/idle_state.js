import { State } from './state';
import { GAME_CONST, ANIMATION_CONST } from '../../game_const';

export class IdleState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    this.owner.playAnimation(ANIMATION_CONST.IDLE);
  }
  update() {
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
  }
  exit() {}
}
