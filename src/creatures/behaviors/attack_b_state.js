import { State } from './state';
import { GAME_CONST, ANIMATION_CONST } from '../../game_const';

export class AttackBState extends State {
  constructor(stateName, owner) {
    super(stateName, owner);
  }
  enter(input) {
    // hit box
    this.anticipationState = true;
    this.attackState = false;
    this.followThroughState = false;
    this.isFinished = false;
    this.isCombo = false;
    this.isLocked = true;
    window.T = this;
    // listen next attack
    // active next attack
    // movement cancel
    Phaser.Input.Keyboard.JustDown(input.cursors.up);
    Phaser.Input.Keyboard.JustDown(input.cursors.left);
    Phaser.Input.Keyboard.JustDown(input.cursors.right);
    this.owner.once(
      `animationcomplete-${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B_ANTICIPATION}`,
      () => {
        Phaser.Input.Keyboard.JustDown(input.cursors.space);
        this.anticipationState = false;
        this.attackState = true;
      }
    );
    this.owner.once(
      `animationcomplete-${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B}`,
      () => {
        this.attackState = false;
        this.followThroughState = true;
        this.isLocked = false;
      }
    );
    this.owner.once(
      `animationcomplete-${GAME_CONST.CREATURES.ADVENTURER}_${ANIMATION_CONST.ATTACK_B_FOLLOW_THROUGH}`,
      () => {
        this.followThroughState = false;
        this.isFinished = true;
      }
    );
    const sign = this.owner.flipX ? -1 : 1;
    this.owner.body.velocity.x +=
      (sign * GAME_CONST.ADVENTURER_CONST.ACCELERATION) / 3;
  }
  update(input) {
    this.owner.body.velocity.x *= GAME_CONST.ADVENTURER_CONST.DAMPING;
    if (this.anticipationState) {
      this.owner.playAnimation(ANIMATION_CONST.ATTACK_B_ANTICIPATION);
    } else if (this.attackState) {
      this.owner.playAnimation(ANIMATION_CONST.ATTACK_B);
      if (Phaser.Input.Keyboard.JustDown(input.cursors.space)) {
        this.isCombo = true;
      }
    } else if (this.followThroughState) {
      this.owner.playAnimation(ANIMATION_CONST.ATTACK_B_FOLLOW_THROUGH);
      if (Phaser.Input.Keyboard.JustDown(input.cursors.space)) {
        this.isCombo = true;
      }
    } else {
      // TODO throw exception ?
      console.debug(`Something goes wrong in AttackBState`);
    }
  }
  exit() {}
}
