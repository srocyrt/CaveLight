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
    this.addState(GAME_CONST.STATES.DOUBLE_JUMP);
    this.addState(GAME_CONST.STATES.KNOCK_DOWN);
    // IDLE
    this.addTransition(GAME_CONST.STATES.IDLE, GAME_CONST.STATES.RUN, input => {
      if (input.cursors.left.isDown || input.cursors.right.isDown) return true;
      return false;
    });
    this.addTransition(
      GAME_CONST.STATES.IDLE,
      GAME_CONST.STATES.JUMP,
      input => {
        if (input.cursors.space.isDown || input.jumpToleration) return true;
        return false;
      }
    );
    this.addTransition(
      GAME_CONST.STATES.IDLE,
      GAME_CONST.STATES.FALL,
      input => {
        if (!input.blocked.down) return true;
        return false;
      }
    );
    // RUN
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.IDLE, input => {
      if (input.cursors.left.isUp && input.cursors.right.isUp) return true;
      return false;
    });
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.JUMP, input => {
      if (input.cursors.space.isDown || input.jumpToleration) return true;
      return false;
    });
    this.addTransition(GAME_CONST.STATES.RUN, GAME_CONST.STATES.FALL, input => {
      if (!input.blocked.down) return true;
      return false;
    });
    // JUMP
    this.addTransition(
      GAME_CONST.STATES.JUMP,
      GAME_CONST.STATES.FALL,
      input => {
        if (this.owner.body.velocity.y >= 0) return true;
        return false;
      }
    );
    this.addTransition(
      GAME_CONST.STATES.JUMP,
      GAME_CONST.STATES.DOUBLE_JUMP,
      (input, state) => {
        if (
          state.double_jump_listen &&
          Phaser.Input.Keyboard.JustDown(this.input.cursors.space) &&
          input.extraJump > 0
        )
          return true;
        return false;
      }
    );

    // FALL
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
    this.addTransition(
      GAME_CONST.STATES.FALL,
      GAME_CONST.STATES.DOUBLE_JUMP,
      input => {
        if (
          Phaser.Input.Keyboard.JustDown(this.input.cursors.space) &&
          input.extraJump > 0
        )
          return true;
        return false;
      }
    );

    // DOUBLE_JUMP
    this.addTransition(
      GAME_CONST.STATES.DOUBLE_JUMP,
      GAME_CONST.STATES.FALL,
      input => {
        if (this.owner.body.velocity.y >= 0) return true;
        return false;
      }
    );

    // INIT
    this.init(GAME_CONST.STATES.FALL);

    // DEBUG
    if (process.env.NODE_ENV !== 'production') {
      window.fsm = this;
    }
  }
  createInput() {
    // creature.flipX update
    this.input = {
      cursors: this.scene.cursors,
      blocked: this.owner.body.blocked,
      extraJump: 0,
      jumpToleration: false,
      edgeToleration: false
    };
    // lastJump
    this.lastJumpTimer = this.scene.time.addEvent();
    this.scene.cursors.space.on('up', () => {
      this.input.jumpToleration = true;
      this.lastJumpTimer.remove();
      this.lastJumpTimer = this.scene.time.addEvent({
        delay: GAME_CONST.ADVENTURER_CONST.JUMP_TOLERATION,
        callback: () => (this.input.jumpToleration = false)
      });
    });
    // lastOnGround
    this.onGoundBefore = false;
    this.lastOnGroundTimer = this.scene.time.addEvent();
  }
  updateInput() {
    let onGround = this.input.blocked.down;
    // extra Jump
    if (onGround) this.input.extraJump = 1;
    // lastOnGround - on land
    if (!this.onGoundBefore && onGround) {
      this.input.lastOnGround = true;
    }
    // lastOnGround - on take-off
    if (this.onGoundBefore && !onGround) {
      this.lastOnGroundTimer = this.scene.time.addEvent({
        delay: GAME_CONST.ADVENTURER_CONST.EDGE_TOLERATION,
        callback: () => (this.input.edgeToleration = false)
      });
    }
    this.onGoundBefore = onGround;
    // space just down
    // take damage
    // this.
  }
}
