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

SelectComponent.prototype = new Component();



//Function: set to set the display and value
//Parameter: displayText -> what the client (user) will see
//Parameter: value -> the value behind the displayText
SelectComponent.prototype.setDisplayValue = function(displayText,value){
	var selectThis = this;
	this.model.data.forEach(function(element){
		var option = {};
		option.displayText = element[displayText];
		option.value = element[value];
		selectThis.options.push(option);
	});
};


//Function: Create HTML element
//Parameter: None
SelectComponent.prototype.view = function(addClass){
	var select = document.createElement("SELECT");
	select.className = addClass;
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


//Function: Execute this function when 'onChange' occurs
//Parameter: callback -> the function to execute when change occurs
// SelectComponent.prototype.onChange = function(callback){
// 	var thisComponent = this;
// 	var sel = thisComponent.element;
// 	sel.addEventListener('change',callback(sel.options[sel.selectedIndex].value));
// }