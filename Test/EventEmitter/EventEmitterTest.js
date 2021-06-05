var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_recieved", dataRecievedHandler);

/*
    eventEmitter调用emit方法触发connection事件，
    绑定在connection上的监听器开始执行（另一个进程）
    调用emit后，程序继续进行，使得connection的监听器（绑定的回调函数）与
    当前主线程并行
*/
eventEmitter.emit("connection");
console.log("process end.");

function connectHandler(){
    setTimeout(function(){
        console.log("connected successfully.");

        eventEmitter.emit("data_recieved");
    }, 1000);
}

function dataRecievedHandler(){
    console.log("data recieved.");
}