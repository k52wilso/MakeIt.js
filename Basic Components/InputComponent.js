
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

//Extend Component Object
InputComponent.prototype = Component.prototype;

//Specify the type
InputComponent.prototype.setType = function(type){
	this.type = type;
}

//Set the value for input
InputComponent.prototype.setValue = function(value){
    this.value = value;
}

//Set its state
InputComponent.prototype.setEditable = function(state){
	this.state =state; //SHOULD be sent from server-side
	if(this.state == false){
		this.element.setAttribute('readonly','');
	}else{
		this.element.removeAttribute('readonly');
	}
}

//Create the HTML element
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

//Change the model when this is called
InputComponent.prototype.onChange =function(){
	var thisComponent = this;
	this.element.addEventListener('change',function(){
		thisComponent.model.data[thisComponent.value] = this.value;
		modelManager.updateModel(thisComponent.model);
	});
}