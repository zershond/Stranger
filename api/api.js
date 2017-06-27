/**
 * Created by zershond on 2017/6/27.
 */
var express = require('express');
var path = require('path');
var url = require('url');

var user = require('./router/userRoute');

var app = express();
var router = express.Router();

app.use('/', function (req, res, next) {
  res.send("respond with a resource");
})

app.use('/user', user);

app.listen(1880);

module.export = router;
