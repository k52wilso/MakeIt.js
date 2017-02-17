function Button(buttonName){
	this.init(buttonName);
	this.element;
	this.value;
	this.type;
}

/*Extend Component*/
Button.prototype = new Component();

//Function: set value in button
//Parameter: value -> the value for the button
Button.prototype.setVaule = function(value){
	this.value = value;
}

//Function: set the type of the button
//Parameter: type -> the type for the button (default:clickable)
Button.prototype.setType = function(type){
	if(type === undefined){
		this.type = 'button';
	}else{
		this.type = type;
	}
}

//Function: Create HTML element
//Parameter: None
Button.prototype.view = function(){
	var button = document.createElement("BUTTON");
	button.setAttribute('component-id',this.name);
	button.setAttribute('type',this.type);
	button.setAttribute('value',this.value);
	this.element = button;
	return button;
};

//Function: function to execute when the button is clicked
//Parameter: callback -> the function that will be executed
Button.prototype.onClick = function(callback){
	callback();
};
