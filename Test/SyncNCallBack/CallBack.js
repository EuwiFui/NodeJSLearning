var fs = require("fs");
fs.readFile("sample.txt", callBackFunc);

console.log("Process end.");

function callBackFunc(err, data){
    if(err)
        return console.error(err);
    console.log(data.toString());
}