var http = require("http");
var url = require("url");
var port = 8090;

function start(route){
    function requestHandler(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("Request for: '" + pathname + "' recieved.");
        route(pathname);

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<html><body><h1>Hello Node.js.</h1></body></html>");
        res.end();
    }

    http.createServer(requestHandler).listen(port);
    console.log("server running: 127.0.0.1:8090");
}

exports.start = start;