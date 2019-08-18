export class State {
  constructor(name, creature) {
    this.name = name;
    this.creature = creature;
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`Create ${this.name} State`);
    }
  }
}
