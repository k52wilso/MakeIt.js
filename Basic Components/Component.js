// This file defines the Component Object

function Component(){
	var name;
	var model;
	var state;
}

Component.prototype.init = function(name,model){
	this.name = name;
	this.model = model;
	this.state = true;
};
