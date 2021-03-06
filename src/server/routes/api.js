
import fs from 'fs';
import express from 'express';

import Search from '../../data/search';
import getProjectDataFileDirPath from '../../data/modules/getProjectDataFileDirPath';

const router = express.Router();

router.get('/list', (req, res, next) => {

  res.set({ 'Access-Control-Allow-Origin': '*' });

  const {
    division,
    name,
    developer,
    type,
    field,
    rate,
    year,
    page = 1,
    itemperpage = 10,
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
    res.json({
      total: data.length,
      page: page,
      itemPerPage: itemperpage,
      list: data.slice(
        (page - 1) * itemperpage,
        (page * itemperpage) < data.length ? (page * itemperpage) : data.length
      ),
    });
    res.end();
  }).catch(err => {
    console.log(err);
    next();
  });
});

router.get('/detail', (req, res, next) => {

  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      if (data.length === 0 || data.length > 1) { next(); }

      const result = data[0];

      res.json(result);
      res.end();
    }).catch(err => {
      console.log(err);
      next();
    });
});

router.get('/overview', (req, res, next) => {

  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      if (data.length === 0 || data.length > 1) { next(); }

      const item = data[0];

      return item.getOverview();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);
      next();
    });
});

router.get('/description', (req, res, next) => {

  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id } = req.query;

  Search({ id })
    .then(data => {
      if (data.length === 0 || data.length > 1) { next(); }

      const item = data[0];

      return item.getDescription();
    })
    .then(data => {
      res.send(data);
      res.end();
    }).catch(err => {
      console.log(err);
      next();
    });
});

router.get('/image/:id/:image', (req, res, next) => {

  res.set({ 'Access-Control-Allow-Origin': '*' });

  const { id, image } = req.params;

  Search({ id })
    .then(data => {
      return new Promise((resolve, reject) => {
        if (data.length === 0) {
          reject(`cannot found image${image} id of (${id})`);
        } else if (data.length > 1) {
          reject(`found more than one item by image${image} id of (${id})`);
        }

        const item = data[0];

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
      next();
    });
});

export default router;
