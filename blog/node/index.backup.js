var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// sign up
var signUp = require('./signUp.js');

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/test"] = requestHandlers.test;

handle['/signUp'] = signUp.signUp;

server.start(router.route, handle);
