import { StateMachine } from './state_machine';
import { GAME_CONST } from '../../game_const';

export class AdventurerFSM extends StateMachine {
  constructor(scene, creature) {
    super(scene, creature);
    this.createInput();
    this.addState(GAME_CONST.STATES.IDLE);
    this.addState(GAME_CONST.STATES.RUN);
    this.addTransition(GAME_CONST.STATES.IDLE, GAME_CONST.STATES.RUN, input => {
      if (input.cursors.left.isDown || input.cursors.right.isDown) return true;
      return false;
    });
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.IDLE, input => {
      if (input.cursors.left.isUp && input.cursors.right.isUp) return true;
      return false;
    });
    this.init(GAME_CONST.STATES.IDLE);
  }
  createInput() {
    this.input = {
      cursors: this.scene.cursors,
      blocked: this.creature.body.blocked
    };
  }
}
