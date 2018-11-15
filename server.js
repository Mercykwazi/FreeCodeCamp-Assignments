  'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dns = require("dns");
const bodyParser = require('body-parser');
var MONGODB_URI =mongoose.connect(process.env.MONGO_URI);
var port = process.env.PORT || 3000;
var cors = require('cors');
var app = express();
const http = require('http');
var url = require("url");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('public'));

app.use('/public', express.static(process.cwd() + '/public'));

var validDomainSchema = new mongoose.Schema({
    _id : {
      type:Number,
      required:true},
    url : {
      type: String,
      required: true}
  });
var incrementerSchema = new mongoose.Schema({
    "_id": {
      type: String,
      required: true},
    "sequence_value": {
      type:Number,
      required:true}
})
var counter = mongoose.model('counter', incrementerSchema)
var domain = mongoose.model('domain', validDomainSchema);
function InitialCounter (){
  const newCounter = new counter({_id:"newId",sequence_value:0});
  newCounter.save((err, data) => err ? done(err) : done(data));
}
function done(outPut){
}
 function value(sequenceName){
   var sequenceDocument = counter.findOne({_id:sequenceName},(err,data)=>{
      data.sequence_value += 1;
      data.save((err, data) => err ? done(err) : done(null, data));
      return data;
   });
   return sequenceDocument.sequence_value;
}
 function saveNewDomain(newUrl) {
  var gettingId = value("newId");
  var  newDomain = new domain({_id: gettingId, url: newUrl});
  newDomain.save((err, data) => err ? done(err) : done(data));
  return newDomain;
};

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});
app.post('/api/shorturl/new', async function(req, res){
  var validHttp = req.body.url.match(/https/g);
  var errorMessage = {}
  if(validHttp.length > 0){
    var validUrl = req.body.url.split("//")[1];
      var doesDomainExits={};
     dns.lookup(validUrl, async(err, address)=>{
      if(err){errorMessage = err}
      if(address){
        doesDomainExits = await domain.findOne({url:req.body.url});
      }
      if(!doesDomainExits){
        doesDomainExits = await saveNewDomain(req.body.url);
      }
     res.json({original_url:doesDomainExits.url, short_url:doesDomainExits._id});
    });
  }
});
app.get("/api/shorturl/:new", async function (req, res) {
  var findDomain = await domain.findOne({_id:req.params["new"]})
  res.redirect(findDomain.url);
});

 app.listen(port, function () {
  console.log('Node.js listening ...');
});
