import express from 'express';
import fs from 'fs';

import Data from '../../data/index';

const router = express.Router();


router.get('/list', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  Data.search(
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
    item => ({
      projectName: item.projectName, 
      teamName: item.teamName,
      developers: item.developers,
      contestInfo: item.contestInfo,
      qualification: item.qualification,
      id: item.id,
      division: item.division,
    })
  ).then(data => {
    res.json(data);
    res.end();
  });
});

router.get('/detail', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  Data.search(null, { id: Number(req.query.id ? req.query.id : 0) })
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

  Data.search(null, { id: Number(req.query.id ? req.query.id : 0) })
    .then(data => {
      const item = data[0];
      const path = __dirname + `/../../../src/data/${Data.divisionDict[item.division]}/${item.contestInfo.year}/`;

      const projectName = String(item.projectName.replace(/\s/gi, '_'));

      fs.readFile(path + projectName + '/description.md', 'utf8', (err, content) => {
        res.send(content);
        res.end();
      });
    });
})

export default router;
