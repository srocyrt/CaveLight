import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class FacingRightState extends State {
  constructor(stateName, creature) {
    super(stateName, creature);
  }
  enter() {
    this.creature.flipX = false;
  }
  update() {}
  exit() {}
}
