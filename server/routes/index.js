import express from 'express';

import data from '../../data/index';

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log(data);
  res.send(data);
});

export default router;
