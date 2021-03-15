const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burger', (req, res) => {
  burger.insertOne(['name', 'devour'], [req.body.burger_name, req.body.devour], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
  console.log(req.body.burger_name);

  burger.updateOne(req.params.id, (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;