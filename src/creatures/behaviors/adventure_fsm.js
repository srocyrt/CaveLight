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
      if (
        (input.blocked.down || input.lastOnGround < 100) &&
        (input.cursors.space.isDown || input.lastJump < 100)
      )
        return true;
      return false;
    });
    this.addTransition(
      GAME_CONST.STATES.IDLE,
      GAME_CONST.STATES.JUMP,
      input => {
        if (
          (input.blocked.down || input.lastOnGround < 100) &&
          (input.cursors.space.isDown || input.lastJump < 100)
        )
          return true;
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
    this.init(GAME_CONST.STATES.FALL);
  }
  createInput() {
    // creature.flipX update
    this.input = {
      cursors: this.scene.cursors,
      blocked: this.owner.body.blocked,
      lastJump: 1000, // < 200ms
      lastOnGround: 1000
    };
    // lastSpace
    this.lastJumpTimer = this.scene.tweens.add({
      targets: this.input,
      lastJump: { from: 1, to: 1000 },
      duration: 1000
    });
    this.lastJumpTimer.pause();
    this.scene.cursors.space.on('up', () => this.lastJumpTimer.restart());
    // lastOnGround
    this.onGroundBefore = false;
    this.onGroundNow = false;
    this.lastOnGroundTimer = this.scene.tweens.add({
      targets: this.input,
      lastOnGround: { from: 1, to: 1000 },
      duration: 1000
    });
    this.lastOnGroundTimer.pause();
    window.test = this;
  }
  updateInput() {
    // lastOnGround
    this.onGroundNow = this.input.blocked.down;
    if (!this.onGroundBefore && this.onGroundNow) {
      this.input.lastOnGround = 0;
    }
    if (this.onGroundBefore && !this.onGroundNow) {
      this.lastOnGroundTimer.restart();
    }
    this.onGroundBefore = this.onGroundNow;
    //
  }
}
