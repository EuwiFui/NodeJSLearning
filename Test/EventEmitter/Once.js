var events = require("events");
var eventEmitter = new events.EventEmitter();

// once绑定的监听器，在第一次事件触发后执行，随后便从事件上移除
eventEmitter.once("connection", connectHandler);

console.log("emit fist----->");
eventEmitter.emit("connection");
console.log("emit second----->");
eventEmitter.emit("connection");

function connectHandler(){
    console.log("connected successfully.");
}