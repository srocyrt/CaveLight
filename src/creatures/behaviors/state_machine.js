import { stateFactory } from './state_factory';

export class StateMachine {
  constructor(scene, creature) {
    this.scene = scene;
    this.creature = creature;
    this.stateSet = new Set();
    this.transitionList = new Map();
  }
  init(initialState) {
    if (process.env.NODE_ENV !== 'production') {
      if (!this.stateSet.has(initialState))
        console.error(
          `Error: Trying initialize a FSM with unknown state. in state_machine.js `
        );
    }
    this.state = stateFactory.create(initialState, this.creature);
    this.state.enter();
  }
  addState(stateName) {
    this.stateSet.add(stateName);
    this.transitionList.set(stateName, new Map());
  }
  addTransition(from, to, onTransition) {
    let transition = this.transitionList.get(from);
    transition.set(to, onTransition);
    this.transitionList.set(from, transition);
  }
  show() {
    for (let [from, transition] of this.transitionList) {
      for (let [to, onTransition] of transition) {
        console.log(`Transition: ${from} -> ${to} : ${onTransition}`);
      }
    }
  }
  update() {
    // try to transition
    for (let [to, onTransition] of this.transitionList.get(this.state.name)) {
      if (onTransition(this.input)) {
        this.state.exit();
        this.state = stateFactory.create(to, this.creature);
        this.state.enter();
      }
    }
    this.state.update();
  }
}
