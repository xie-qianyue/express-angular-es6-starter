'use strict';

const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const app = express();

// the routing modules
const webRouter = require('./routes/web');
const api = require('./routes/api');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
// serve the static files
app.use(express.static('client'));
// match the api url with a prefix '/api'
app.use('/api', api);
app.use('/', webRouter);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;