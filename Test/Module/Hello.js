exports.world = function(){
    console.log("Hello World.");
}

function Cla(){
    var name;
    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name;
    }
}

exports.Cla = Cla;