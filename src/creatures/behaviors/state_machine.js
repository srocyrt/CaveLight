import { stateFactory } from './state_factory';

export class StateMachine {
  constructor(scene, owner) {
    this.scene = scene;
    this.owner = owner;
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
    this.state = stateFactory.create(initialState, this.owner);
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
    this.updateInput();
    for (let [to, onTransition] of this.transitionList.get(this.state.name)) {
      if (onTransition(this.input, this.state)) {
        this.state.exit();
        this.state = stateFactory.create(to, this.owner);
        this.state.enter(this.input);
      }
    }
    this.state.update(this.input);
  }
}
