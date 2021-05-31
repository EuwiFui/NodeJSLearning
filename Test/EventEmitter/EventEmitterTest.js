var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_recieved", dataRecievedHandler);

eventEmitter.emit("connection");
console.log("process end.");

function connectHandler(){
    console.log("connected successfully.");

    eventEmitter.emit("data_recieved");
}

function dataRecievedHandler(){
    console.log("data recieved.");
}