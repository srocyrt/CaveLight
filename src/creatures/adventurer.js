import { Creature } from './creature';
import { GAME_CONST } from '../game_const';
import { AdventurerFSM } from './behaviors/adventure_fsm';
import { FacingFSM } from './behaviors/facing_fsm';

export class Adventurer extends Creature {
  constructor(scene, x, y) {
    super(scene, x, y, GAME_CONST.CREATURES.ADVENTURER);
    // temporary solution:
    this.body.setSize(16, 36);
    this.attackZone = [];
    this.behaviorFSM = new AdventurerFSM(scene, this);
    this.facingFSM = new FacingFSM(scene, this);
    window.adventurer = this;
  }
  update() {
    this.behaviorFSM.update();
    this.facingFSM.update();
  }
  //
  takeDamage() {
    this.onTakingDamage = true;
  }
  // slow mo
}
