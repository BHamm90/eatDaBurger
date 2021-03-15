const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burger', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insertOne(cols, vals, cb) {
    orm.create('burger', cols, vals, (res) => cb(res));
  },
  updateOne(id, cb) {
    orm.update('burger', 'devour', 1, 'id', id, (res) => cb(res));
  },

};

module.exports = burger;
