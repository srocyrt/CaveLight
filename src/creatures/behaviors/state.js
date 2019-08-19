export class State {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`Create ${this.name} State`);
    }
  }
}
