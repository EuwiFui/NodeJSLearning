var e = require("events");
var ee = new e.EventEmitter();

ee.on("event", func1);
ee.on("event", func2);

// 获取某个emmiter给某个事件绑定的监听器个数。listenerCount()为类方法
var listenerCount = e.EventEmitter.listenerCount(ee, "event");
console.log("listener count is : " + listenerCount);

function func1(){
    ;
}

function func2(){
    ;
}