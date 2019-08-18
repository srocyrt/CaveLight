import { StateMachine } from './state_machine';
import { GAME_CONST } from '../../game_const';

export class SlimeBlueFSM extends StateMachine {
  constructor(scene, owenr) {
    super(scene, owner);
    this.addState(GAME_CONST.STATES.IDLE);
    this.init(GAME_CONST.STATES.IDLE);
  }
}
