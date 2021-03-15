const connection = require('./connection.js');

const orm = {

  selectAll(table, cb) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, {table}, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(table, cols, burgerName, cb) {
    let queryString = `INSERT INTO ?? (??) VALUES (?)`;

    connection.query(queryString, [table, cols, burgerName], (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne(table, updateCols, updateRow, searchCols, searchRow, cb) {
    let queryString = `UPDATE ?? SET ?? WHERE ?? = ?`;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
