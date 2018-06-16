import express from 'express';

import Data from '../../data/index';

const router = express.Router();


router.get('/list/:division', (req, res, next) => {
  const queryContestInfo = {
    type: {
      main: req.query.type,
      sub: req.query.subType
    },
    rate: req.query.rate,
    year: req.query.year,
  };
  res.json(Data.search(req.params.division, req.query.name || "", req.query.developer || "", queryContestInfo));
  res.end();
});

export default router;
