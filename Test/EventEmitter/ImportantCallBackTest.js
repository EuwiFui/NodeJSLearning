/*
    事件按产生先后顺序进入事件轮询，每个事件的任务在不同线程中，任务结束后，绑定的回调函数进入回调函数队列，回调函数依次进行。
    也就是说，并行的是事件产生后需要处理的一些任务，而不是回调函数。
*/

var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("e1", func1);
eventEmitter.on("e2", func2);

eventEmitter.emit("e1");
eventEmitter.emit("e2");

function func1(){
    console.log("func1 start.");

    var startTime = new Date().getTime();
    var intervalTime = 5000;

    while(new Date().getTime() < startTime + intervalTime);

    console.log("func1 done.");
}

function func2(){
    console.log("func2 start.");

    var startTime = new Date().getTime();
    var intervalTime = 5000;

    while(new Date().getTime() < startTime + intervalTime);

    console.log("func2 done.");
}