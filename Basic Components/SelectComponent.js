/*This file details a SelectComponent: a select dropdown for a page*/
/*Param: */
function SelectComponent(componentName,model){
	this.options = [];
    this.element;
	if(modelManager.instanceOf(model)){
		this.init(componentName,model);
	}else{
		console.log('This model has not been created yet.');
	}
	
}

SelectComponent.prototype = Component.prototype;


//Set what the user will see in the select dropdown 
// Value will be what is behind each option
SelectComponent.prototype.setDisplayValue = function(displayText,value){
	var selectThis = this;
	this.model.data.forEach(function(element){
		var option = {};
		option.displayText = element[displayText];
		option.value = element[value];
		selectThis.options.push(option);
	});
};

//Set the value behind each option in select dropdown


// This function will create the selectComponent: what will be displayed on the page
//Param: None
//Return: the html 
SelectComponent.prototype.view = function(){
	var select = document.createElement("SELECT");
	select.setAttribute('component-id',this.name);
	this.options.forEach(function(element){
		var option = document.createElement('OPTION');
		var display = document.createTextNode(element.displayText);
		option.setAttribute('value',element.value);
		option.appendChild(display);
		select.appendChild(option);
	});
	this.element = select;
	return select;
};

/*What to do when the onchange Event occurs*/
SelectComponent.prototype.onChange = function(callback){
	this.element.addEventListener('change',callback());
}