
//This is used to keep track of all models
function ModelManager(){
  this.models = {};
}

//This function will return true if an instance of the models exist or false otherwise
ModelManager.prototype.instanceOf = function(model){
	var instance = model;
	if(this.models[instance.name]){
		return true;
	}else{
		return false;
	}
};

//Add a models
ModelManager.prototype.addModel = function(model){
	if(!this.instanceOf(model)){
		this.models[model.name] = model;
	}else{
		console.log("This models already exists.");
	}
};
//remove a model from models
ModelManager.prototype.removeModel = function(model){
	if(this.instanceOf(model)){
		delete this.models[model.name];
	}else{
		console.log("This model does not exist.");
	}
};

//Update the model
ModelManager.prototype.updateModel = function(model){
	if(this.instanceOf(model)){
		this.models[model.name] = model;
	}else{
		console.log("This model does not exist.");
	}
}