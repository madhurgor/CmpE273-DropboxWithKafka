var fs = require('fs');
var path = require('path');
var dateTime = require('node-datetime');

var dt = dateTime.create();

function handle_request(msg, callback){
  var res = {};
  console.log("In handle request of :"+ JSON.stringify(msg));
  //console.log(path.join(__dirname,'../../')+`/${req.query.username}/star`+`/${req.query.file}`);
  fs.readFile(path.join(__dirname,'../../')+`/${msg.username}/star/${msg.file}`, 'utf8', function(err, data) {
      if (err) {
        res.code=401;
        callback(null,res);
        //res.status(401).json();
      }
      res.code=200;
      res.data=data;
      callback(null,res);
      //res.status(200).json({data:data});
  });
}

exports.handle_request = handle_request;
