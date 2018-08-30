
import express from 'express';

import Search from '../../data/index';

const router = express.Router();


router.get('/list', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  Search(
    req.query.division,
    {
      projectName: req.query.name || "",
      developer: req.query.developer || "", 
      contestInfo: {
        type: {
          main: req.query.type,
          sub: req.query.subType
        },
        rate: req.query.rate,
        year: req.query.year,
      }
    },
    item => ({ contestInfo: item.getContestInfoByString() })
  ).then(data => {
    res.json(data);
    res.end();
  });
});

router.get('/detail', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  Search(null, { id: Number(req.query.id ? req.query.id : 0) })
    .then(data => {
      if (data.length === 0) res.json({ });
      else {
        const result = data[0];

        res.json(result);
      };
      res.end();
    });
});

router.get('/description', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  Search(null, { id: Number(req.query.id ? req.query.id : 0) })
    .then(data => {
      const item = data[0];

      return item.getDescription();
    })
    .then(data => {
      res.send(data);
      res.end();
    });
})

export default router;
