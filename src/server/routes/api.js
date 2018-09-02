
import fs from 'fs';
import express from 'express';

import Search from '../../data/index';
import getProjectDataFileDirPath from '../../data/modules/getProjectDataFileDirPath';

const router = express.Router();


router.get('/list', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const {
    division,
    name,
    developer,
    type,
    subType,
    rate,
    year,
  } = req.query;

  Search(
    division || '',
    {
      projectName: name || "",
      developer: developer || "", 
      contestInfo: {
        type: {
          main: type,
          sub: subType
        },
        rate: rate,
        year: year,
      }
    },
    item => ({ contestInfo: item.getContestInfoByString() })
  ).then(data => {
    res.json(data);
    res.end();
  }).catch(err => {
    console.log(err);

    res.status(500);
    res.end();
  });
});

router.get('/detail', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search(null, { id: Number(id ? id : 0) })
    .then(data => {
      if (data.length === 0) res.json({ });
      else {
        const result = data[0];

        res.json(result);
      };
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(500);
      res.end();
    });
});

router.get('/overview', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search(null, { id: Number(id ? id : 0) })
    .then(data => {
      const item = data[0];

      return item.getOverview();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(500);
      res.end();
    });
});

router.get('/description', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search(null, { id: Number(id ? id : 0) })
    .then(data => {
      const item = data[0];

      return item.getDescription();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(500);
      res.end();
    });
});

router.get('/image/:id/:image', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id, image } = req.params;

  Search(null, { id: Number(id ? id : 0) })
    .then(data => {
      const item = data[0];

      return new Promise((resolve, reject) => {
        fs.readFile(`${getProjectDataFileDirPath(item)}/images/${image}`, (err, data) => {
          if (err) reject(err);

          resolve(data);
        });
      });
    })
    .then(img => {
      res.end(img, 'binary');
    }).catch(err => {
      console.log(err);

      res.status(500);
      res.end();
    });
});

export default router;
