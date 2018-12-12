var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var employee=require('./routes/Emp');
var port=2000;

var app = express();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api',employee);


app.listen(port,()=>{
  console.log('server listening on '+port)
})

module.exports = app;
