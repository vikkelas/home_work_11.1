/* eslint-disable linebreak-style */
export default class Team {
  constructor(...hero) {
    this.team = [...hero];
  }

  [Symbol.iterator]() {
    let i = -1;
    const {
      team,
    } = this;
    return {
      next() {
        if (i < team.length) {
          i += 1;
          return {
            value: team[i],
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
