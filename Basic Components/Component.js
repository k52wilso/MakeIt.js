// This file defines the Component Object

function Component(){
	var name;
	var model;
	var state;
}


//Function: Initialize the Component
//Parameter: name -> the name of the component
//Parameter: model -> the model for the component
Component.prototype.init = function(name,model){
	this.name = name;
	this.model = model;
	this.state = true;
};

Component.prototype.isModelLoaded = function(){
	if(this.model !== undefined){
		return true;
	}
	return false;
}