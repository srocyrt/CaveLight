import { State } from './state';
import { GAME_CONST } from '../../game_const';

export class FacingLeftState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter() {
    this.owner.flipX = true;
  }
  update() {}
  exit() {}
}
