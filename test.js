
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
	contactModel.init();
	contactModel.data = thisModel.findData(thisModel.data,SelectComponentElement.options[SelectComponentElement.selectedIndex].value);

	//add to manager 
	// modelManager.addModel(contactModel);

	var contactname = document.getElementById('contactname');
	// var email = document.getElementById('email');
	// var number = document.getElementById('number');
	/*Input Components*/
	var nameInputComponent = new InputComponent('nameInputComponent',contactModel);
	nameInputComponent.setType('text');
	nameInputComponent.setValue('fullname');

	var emailInputComponent = new InputComponent('emailInputComponent',contactModel);
	emailInputComponent.setType('text');
	emailInputComponent.setValue('email');
	
	var numberInputComponent = new InputComponent('numberInputComponent',contactModel);
	numberInputComponent.setType('text');
	numberInputComponent.setValue('number');

	
	// Create views and append 
	contactname.appendChild(nameInputComponent.view());
	email.appendChild(emailInputComponent.view());
	number.appendChild(numberInputComponent.view());
	nameInputComponent.editable(false);
	emailInputComponent.editable(false);
	numberInputComponent.editable(false);



	//onchange event for component
	SelectComponentElement.addEventListener('change',function(){
		var modelToPass = thisModel;
		var contactname = document.getElementById('contactname');
		var email = document.getElementById('email');
		var number = document.getElementById('number');
		var sel = this;
		var modelSelected = modelToPass.findData(thisModel.data,sel.options[sel.selectedIndex].value);
		var nameInputComponentA = nameInputComponent;
		var emailInputComponentA = emailInputComponent;
		var numberInputComponentA = numberInputComponent;
		nameInputComponentA.element.setAttribute('value',modelSelected[nameInputComponentA.value]);
		emailInputComponentA.element.setAttribute('value',modelSelected[emailInputComponentA.value]);
		numberInputComponentA.element.setAttribute('value',modelSelected[numberInputComponentA.value]);
	});
	//Add Element to applicable location
	var componentList = document.getElementById("componentList");
	componentList.appendChild(newSelectComponent.element);
});




