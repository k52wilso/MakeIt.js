
// Create a model
var model = new Model();
model.init("contactModel");


//Bind some data to the model
//Returns a "complete" message 
model.bindData('./index.php',function(){
	var thisModel = model;
	//Add the model to our modelManager
	modelManager.addModel(model);

	//Create our SelectComponent
	var newSelectComponent = new SelectComponent("newSelectComponent",model);
	newSelectComponent.setDisplayValue('fullname','username');

	//Create the HTML element 
	var SelectComponentElement = newSelectComponent.view();

	// newSelectComponent.onChange(function(value){
	// 	var modelToPass = thisModel;
	// 	var contactname = document.getElementById('contactname');
	// 	var email = document.getElementById('email');
	// 	var number = document.getElementById('number');
	// 	console.log(modelToPass.findData(thisModel.data,value));
	// });

	//Initial page load: get the current model
	var contactModel = new Model();
	contactModel.data = thisModel.findData(thisModel.data,SelectComponentElement.options[SelectComponentElement.selectedIndex].value);
	var contactname = document.getElementById('contactname');
	var email = document.getElementById('email');
	var number = document.getElementById('number');
	var nameInputComponent = new InputComponent('nameInputComponent',contactModel);
	var emailInputComponent = new InputComponent('emailInputComponent',contactModel);
	var numberInputComponent = new InputComponent('numberInputComponent',contactModel);
	

	//onchange event for component
	SelectComponentElement.addEventListener('change',function(){
		var modelToPass = thisModel;
		var contactname = document.getElementById('contactname');
		var email = document.getElementById('email');
		var number = document.getElementById('number');
		var sel = this;
		console.log(modelToPass.findData(thisModel.data,sel.options[sel.selectedIndex].value));
	});
	//Add Element to applicable location
	var componentList = document.getElementById("componentList");
	componentList.appendChild(newSelectComponent.element);
});




