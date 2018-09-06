
import fs from 'fs';
import express from 'express';

import Search from '../../data/search';
import getProjectDataFileDirPath from '../../data/modules/getProjectDataFileDirPath';

const router = express.Router();


router.get('/list', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const {
    division,
    name,
    developer,
    type,
    field,
    rate,
    year,
  } = req.query;

  Search(
    {
      division,
      projectName: name,
      developer,
      contestInfo: {
        type,
        field,
        rate,
      },
      year,
    },
  ).then(data => {
    res.json(data);
    res.end();
  }).catch(err => {
    console.log(err);

    res.status(404);
    res.end();
  });
});

router.get('/detail', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      if (data.length === 0) res.json({ });
      else {
        const result = data[0];

        res.json(result);
      };
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(404);
      res.end();
    });
});

router.get('/overview', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      const item = data[0];

      return item.getOverview();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(404);
      res.end();
    });
});

router.get('/description', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      const item = data[0];

      return item.getDescription();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);

      res.status(404);
      res.end();
    });
});

router.get('/image/:id/:image', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id, image } = req.params;

  Search({ id })
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

      res.status(404);
      res.end();
    });
});

export default router;
