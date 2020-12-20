import db from "./db";
const _ = require("lodash");

const today = new Date().toISOString();

export const gamesOfPlayer = (id) =>
  _.filter(db.games, (o) => _.includes(o.signups, id));
export const lastGameOfPlayer = (id) =>
  _.last(_.filter(db.games, (o) => o.start_time < today && _.includes(o.signups, id)));
export const getUserById = (id) => _.find(db.users, ["_id", id]);
export const getFieldById = (id) => _.find(db.fields, ["_id", id]);
