var http = require('http');
var url = require('url');
var openbibles = require('openbibles');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  res.end(openbibles(q.ref, 'asv'));
}).listen(process.env.PORT);
