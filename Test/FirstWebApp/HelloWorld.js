/*
    require导入一个CommonJS module，这里导入的是'http' module
    - 它引入http module，并赋给了一个局部变量
    - 所有http所依赖的类似的module也同样被导入
*/
var http = require('http');
// define local variable: port
var port = 8090;
/*
    创建一个新的HTTP服务器
    - 需要执行一个处理请求的方法，这里是responseHandler
    - 监听指定端口（这里为8090）的HTTP请求
*/
http.createServer(responseHandler).listen(port);

console.log("Server running at http://127.0.0.1:8090");

function responseHandler(req, res){
    res.writeHead(200, {"Content-type" : "text/html"});
    res.end("<html><body><h1>Hello World!</h1></body></html>");
}