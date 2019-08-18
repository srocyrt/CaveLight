import { IdleState } from './idle_state';
import { RunState } from './run_state';
import { JumpState } from './jump_state';
import { FallState } from './fall_state';
import { FacingRightState } from './facing_right_state';
import { FacingLeftState } from './facing_left_state';
import { GAME_CONST } from '../../game_const';

export let stateFactory;

class StateFacotry {
  constructor() {
    this.stateList = new Map();
    this.stateList.set(GAME_CONST.STATES.IDLE, IdleState);
    this.stateList.set(GAME_CONST.STATES.RUN, RunState);
    this.stateList.set(GAME_CONST.STATES.JUMP, JumpState);
    this.stateList.set(GAME_CONST.STATES.FALL, FallState);
    this.stateList.set(GAME_CONST.STATES.FACING_RIGHT, FacingRightState);
    this.stateList.set(GAME_CONST.STATES.FACING_LEFT, FacingLeftState);
  }
  create(stateName, owner) {
    if (process.env.NODE_ENV !== 'production') {
      if (!this.stateList.has(stateName)) {
        const name = stateName.charAt(0).toUpperCase() + stateName.substring(1);
        console.debug(`Error: Trying to create ${name}State.`);
      }
    }
    return new (this.stateList.get(stateName))(stateName, owner);
  }
}

// singleton?
stateFactory = new StateFacotry();
