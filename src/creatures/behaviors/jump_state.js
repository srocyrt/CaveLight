import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class JumpState extends State {
  constructor(stateName, creature) {
    super(stateName, creature);
  }
  enter() {
    this.creature.playAnimation(GAME_CONST.ANIMATIONS.JUMP);
  }
  update() {}
  exit() {}
  handle(lifecycle, input) {}
}
