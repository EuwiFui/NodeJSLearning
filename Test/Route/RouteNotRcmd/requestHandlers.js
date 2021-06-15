function index(){
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return "Hello, I am Index.";
}

function fuck(){
    return "Hello, I am fucking you.";
}

exports.index = index;
exports.fuck = fuck;