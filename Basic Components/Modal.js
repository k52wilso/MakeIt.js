
function Modal(modalName){
	this.init(modalName);
	this.element;
}

/*Extending the Component Object*/
Modal.prototype = new Component();

//Function: Create HTML element
//Parameter: None
//Return: the element that was created
Modal.prototype.view = function(){
	var modal = document.createElement("DIV");
	modal.setAttribute('component-id',this.name);
	modal.setAttribute('style','position:absolute;z-index:1;width:100%;height:100%;background:rgba(0,0,0,0.5);');
	this.element = modal;
	return modal;
};

//Function: hide the modal
//Parameter: None
Modal.prototype.hide = function(){
	this.element.style.display = 'none';
};

//Function: show the modal
//Parameter: None
Modal.prototype.show = function(){
	this.element.style.display = 'block';
};



