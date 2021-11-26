/* eslint-disable linebreak-style */
export default class Team {
  constructor(...hero) {
    this.team = [...hero];
  }

  [Symbol.iterator]() {
    let i = 0;
    const arr = this.team.length;
    return {
      next() {
        if (i < arr) {
          i += 1;
          return {
            value: this.team[i],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
