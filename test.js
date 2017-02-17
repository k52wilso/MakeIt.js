
// Create a model
var model = new Model();
model.init("contactModel");

//Create components
var newSelectComponent;

//Bind some data to the model
//Returns a "complete" message 
model.bindData('./index.php',function(){

	//Add the model to our modelManager
	modelManager.addModel(model);

	//Create our SelectComponent
	newSelectComponent = new SelectComponent("newSelectComponent",model);
	newSelectComponent.setDisplayValue('username','fullname');

	//Create the HTML element 
	var SelectComponentElement = newSelectComponent.view();

	//Add Element to applicable location
	var componentList = document.getElementById("componentList");
	componentList.appendChild(newSelectComponent.element);
});



