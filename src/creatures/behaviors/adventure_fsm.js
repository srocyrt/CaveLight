import { StateMachine } from './state_machine';
import { GAME_CONST } from '../../game_const';

export class AdventurerFSM extends StateMachine {
  constructor(scene, owner) {
    super(scene, owner);
    this.createInput();
    this.addState(GAME_CONST.STATES.IDLE);
    this.addState(GAME_CONST.STATES.RUN);
    this.addState(GAME_CONST.STATES.JUMP);
    this.addState(GAME_CONST.STATES.FALL);
    this.addTransition(GAME_CONST.STATES.IDLE, GAME_CONST.STATES.RUN, input => {
      if (input.cursors.left.isDown || input.cursors.right.isDown) return true;
      return false;
    });
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.IDLE, input => {
      if (input.cursors.left.isUp && input.cursors.right.isUp) return true;
      return false;
    });
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.JUMP, input => {
      if (input.cursors.space.isDown || input.lastSpace < 200) return true;
      return false;
    });
    this.addTransition(
      GAME_CONST.STATES.IDLE,
      GAME_CONST.STATES.JUMP,
      input => {
        if (input.cursors.space.isDown || input.lastSpace < 200) return true;
        return false;
      }
    );
    this.addTransition(
      GAME_CONST.STATES.JUMP,
      GAME_CONST.STATES.FALL,
      input => {
        if (this.owner.body.velocity.y >= 0) return true;
        return false;
      }
    );
    this.addTransition(
      GAME_CONST.STATES.FALL,
      GAME_CONST.STATES.IDLE,
      input => {
        if (
          input.blocked.down &&
          input.cursors.left.isUp &&
          input.cursors.right.isUp
        )
          return true;
        return false;
      }
    );
    this.addTransition(GAME_CONST.STATES.FALL, GAME_CONST.STATES.RUN, input => {
      if (
        input.blocked.down &&
        (input.cursors.left.isDown || input.cursors.right.isDown)
      )
        return true;
      return false;
    });
    this.init(GAME_CONST.STATES.IDLE);
  }
  createInput() {
    this.input = {
      cursors: this.scene.cursors,
      blocked: this.owner.body.blocked,
      lastSpace: 200 // < 200ms
    };
    this.tween = this.scene.tweens.add({
      targets: this.input,
      lastSpace: { from: 1, to: 200 },
      duration: 200
    });
    this.tween.pause();
    this.scene.cursors.space.on('up', () => console.log(this.tween.restart()));
  }
}
