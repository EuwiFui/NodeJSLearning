var events = require("events");
var eventEmitter = new events.EventEmitter();
var sleep = require("../Util/sleep");

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_recieved", dataRecievedHandler);

/*
    eventEmitter调用emit方法触发connection事件，
    connection事件结束后，监听器进入监听器队列开始执行(事件在另一个线程中，事件结束后，回调函数在主线程中回调，与主线程在同一个进程)
*/
eventEmitter.emit("connection");

sleep(3000);
console.log("process end.");

function connectHandler(){
    sleep(4000);
    console.log("connected successfully.");
    eventEmitter.emit("data_recieved");
}

function dataRecievedHandler(){
    console.log("data recieved.");
}