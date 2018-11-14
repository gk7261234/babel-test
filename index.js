/**
 * Created by GK on 2018/11/9.
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
var server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log("Request for" + pathname + "received");
  fs.readFile(pathname.substr(1),function (err,data) {
    if (err){
      res.writeHead(404,{'Content-Type': 'text/html'})
    }else {
      res.writeHead(200,{'Content-Type': 'text/html'})
      res.write(data.toString())
    }
    res.end()
  })
}).listen(8880);

