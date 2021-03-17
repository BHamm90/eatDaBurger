const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insertOne(['burger_name'], [req.body.burger_name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.deleteOne(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
