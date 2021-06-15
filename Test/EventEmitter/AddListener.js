var events = require("events");
var ee = new events.EventEmitter();
var sleep = require("../Util/sleep");

// addListener为事件添加监听器到监听器数组的尾部
ee.addListener("Fuck", fuck);
ee.addListener("Fuck", fuck2);

ee.emit("Fuck");

function fuck(){
    sleep(4000);
    console.log("fuck!");
}

function fuck2(){
    console.log("fuck2!");
}