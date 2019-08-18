import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class FacingLeftState extends State {
  constructor(stateName, creature) {
    super(stateName, creature);
  }
  enter() {
    this.creature.flipX = true;
  }
  update() {}
  exit() {}
}
