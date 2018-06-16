import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routerIndex from './routes/index';

var app = express();

let port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerIndex);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

module.exports = app;
