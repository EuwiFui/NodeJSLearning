var server = require("./server");
var router = require("./router");
var reqHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = reqHandlers.index;
handle['/index'] = reqHandlers.index;
handle['/fuck'] = reqHandlers.fuck;

server.start(router, handle);