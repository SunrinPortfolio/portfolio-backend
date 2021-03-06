import '@babel/polyfill';

import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import apiRouter from './routes/api';

const app = express();

const port = 80;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../../public')));

app.use('/api/', apiRouter);

app.use((err, req, res, next) => {
  res.status(404);
  next();
});

const server = app.listen(port, () => {
  console.log('');
  console.log(`Listening on ${port}`);
  console.log('');
});

module.exports = app;
