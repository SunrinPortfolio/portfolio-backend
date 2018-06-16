import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import apiRouter from './routes/api';

var app = express();

let port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const server = app.listen(port, () => {
  console.log('');
  console.log(`Listening on ${port}`);
  console.log('');
});

module.exports = app;
