import { StateMachine } from './state_machine';
import { GAME_CONST } from '../../game_const';

export class FacingFSM extends StateMachine {
  constructor(scene, owner) {
    super(scene, owner);
    this.createInput();
    this.addState(GAME_CONST.STATES.FACING_RIGHT);
    this.addState(GAME_CONST.STATES.FACING_LEFT);
    this.addTransition(
      GAME_CONST.STATES.FACING_RIGHT,
      GAME_CONST.STATES.FACING_LEFT,
      input => {
        if (input.cursors.right.isUp && input.cursors.left.isDown) return true;
        return false;
      }
    );
    this.addTransition(
      GAME_CONST.STATES.FACING_LEFT,
      GAME_CONST.STATES.FACING_RIGHT,
      input => {
        if (input.cursors.left.isUp && input.cursors.right.isDown) return true;
        return false;
      }
    );
    this.init(GAME_CONST.STATES.FACING_RIGHT);
  }
  createInput() {
    this.input = {
      cursors: this.scene.cursors
    };
  }
}
