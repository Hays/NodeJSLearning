/*
// read file sync.
var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log("App run end!");
*/

/*
// read file async.
var fs = require('fs');
fs.readFile('text.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});

console.log('App run end!');
*/

/*
// server demo
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888');
*/

// event loop demo

var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectEvent = 'connect';
var receivedEvent = 'data_received';
var connectHandler = function connected() {
  console.log('connect success');
  eventEmitter.emit(receivedEvent);
};

eventEmitter.on(connectEvent, connectHandler);

eventEmitter.on(receivedEvent, function() {
  console.log('data received success.');
});

eventEmitter.emit(connectEvent);

console.log('App run end.');


