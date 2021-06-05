var e = require("events");
var ee = new e.EventEmitter();

ee.on("event", func1);
ee.on("event", func2);
ee.on("event", func3);

// 获取event事件的监听器数组
var listeners = new Array();
listeners = ee.listeners("event");

console.log("listeners arr length is " + listeners.length);
for (var i = 0; i < listeners.length; i++) {
    var elem = listeners[i];
    elem();
}

function func1(){
    console.log("i am func1");
}
function func2(){
    console.log("i am func2");
}
function func3(){
    console.log("i am func3");
}