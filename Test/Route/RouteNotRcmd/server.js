var http = require("http");
var url = require("url");
var port = 8090;

function start(router, handle){
    http.createServer(requestHandler).listen(port);
    console.log("Server running: 127.0.0.1:" + port);

    function requestHandler(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("Request for: '" + pathname + "' received.");

        var content = router.route(handle, pathname);
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(content);
        res.end();
    }
}

exports.start = start;