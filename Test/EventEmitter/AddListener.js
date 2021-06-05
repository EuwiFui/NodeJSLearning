var events = require("events");
var ee = new events.EventEmitter();

// addListener为事件添加监听器到监听器数组的尾部，但监听器执行时是并行的
ee.addListener("Fuck", fuck);
ee.addListener("Fuck", fuck2);

ee.emit("Fuck");

function fuck(){
    setTimeout(function(){
        console.log("fuck!");
    }, 1000);
}

function fuck2(){
    console.log("fuck2!");
}