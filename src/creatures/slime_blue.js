import { SlimeBlueFSM } from './behaviors/slime_blue_fsm';
import { FacingFSM } from './behaviors/facing_fsm';
import { Creature } from './creature';
import { GAME_CONST } from '../game_const';

export class SlimeBlue extends Creature {
  constructor(scene, x, y) {
    super(scene, x, y, GAME_CONST.CREATURES.SLIME_BLUE);
    this.behaviorFSM = new SlimeBlueFSM(scene, this);
    this.facingFSM = new FacingFSM(scene, this);
  }
  update() {
    this.behaviorFSM.update();
    this.facingFSM.update();
  }
}
