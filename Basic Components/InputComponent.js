
/*This file details a InputComponent: creates*/
function InputComponent(componentName,model){
	this.element;
	this.type;
	this.value;
	this.state = false;
	if(modelManager.instanceOf(model)){
		this.init(componentName,model);
	}else{
		console.log('This model has not been created yet.');
	}
}

/*Extend the Component Object*/
InputComponent.prototype = Component.prototype;

//Function: set the type of the input
//Parameter: type -> the type that the input will be
InputComponent.prototype.setType = function(type){
	this.type = type;
}

//Function: set the value of the input
//Parameter: value -> the value for the input
InputComponent.prototype.setValue = function(value){
    this.value = value;
}

//Function: set the type of the input
//Parameter: type -> the type that the input will be
InputComponent.prototype.setEditable = function(state){
	this.state =state; //SHOULD be sent from server-side
	if(this.state == false){
		this.element.setAttribute('readonly','');
	}else{
		this.element.removeAttribute('readonly');
	}
}

//Function: Create HTML element
//Parameter: None
//Return: the element that was created
InputComponent.prototype.view = function(){
	var input = document.createElement("INPUT");
	input.setAttribute('component-id',this.name);
	input.setAttribute('type',this.type);
	input.setAttribute('value',this.model.data[this.value]);
	if(this.state == false){
		input.setAttribute('readonly','');
	}
	this.element = input;
	return input;
}

//Function: Execute this function when 'onChange' occurs
//Parameter: Optional callback function
InputComponent.prototype.onChange =function(callback){
	if(callback === undefined){
		var thisComponent = this;
		this.element.addEventListener('change',function(){
			thisComponent.model.data[thisComponent.value] = this.value;
			modelManager.updateModel(thisComponent.model);
		});
	}else{
		callback();
	}
}