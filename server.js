'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer')
var upload = multer()
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });
app.post('/api/fileanalyse',  upload.single('upfile'),function(req, res) {
 var outPut= res.json({"name":req.file.originalname,"type":req.file.mimetype,"size":req.file.size})
  console.log('what is this',outPut)
  
});


app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
