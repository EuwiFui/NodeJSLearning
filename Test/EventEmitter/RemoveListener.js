var e = require("events");
var ee = new e.EventEmitter();

ee.on("connection", connectHandler);
ee.on("connection", connectHandler2);

console.log("before remove listener01------>");
ee.emit("connection");
// removeListener
ee.removeListener("connection", connectHandler);
console.log("after remove listener01------->");
ee.emit("connection")

function connectHandler(){
    console.log("connected successfully.");
}

function connectHandler2(){
    console.log("connected 2");
}