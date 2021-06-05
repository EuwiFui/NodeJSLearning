var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("event01", eventHandler01);
eventEmitter.on("event01", eventHandler02);

/*
    event01事件绑定了两个监听器。
    触发事件后，两个监听器并行执行
*/
eventEmitter.emit("event01", "arg1", "arg2", "arg3");

function eventHandler01(arg1, arg2){
    setTimeout(function(){
        console.log("Event Handler 01 %s : %s", arg1, arg2);
    }, 1000);
}

function eventHandler02(arg1, arg2, arg3){
    console.log("Event Handler 02 %s : %s : %s", arg1, arg2, arg3);
}