var events = require('events');
var eventEmitter = new events.EventEmitter();
var sleep = require("../Util/sleep");

eventEmitter.on("event01", eventHandler01);
eventEmitter.on("event01", eventHandler02);

/*
    event01事件绑定了两个监听器。
    触发事件后，两个监听器按绑定次序执行（按次序进行，不是并行啊！！）
*/
eventEmitter.emit("event01", "arg1", "arg2", "arg3");

function eventHandler01(arg1, arg2){
    sleep(5000);
    console.log("Event Handler 01 %s : %s", arg1, arg2);
}

function eventHandler02(arg1, arg2, arg3){
    console.log("Event Handler 02 %s : %s : %s", arg1, arg2, arg3);
}