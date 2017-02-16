/*This file details a SelectComponent: a select dropdown for a page*/

import{Component} from 'Component.js'

var SelectComponent = new Component();

//Variable to hold options 
SelectComponent.options;

//This function will bind the data as options 
//Param:None
//Return: an array containing objects of ("display":"actualValue") pairs
SelectComponent.prototype.bindData = function(){
	 this.options = [];
};

// This function will create the selectComponent: what will be displayed on the page
//Param: None
//Return: the html 
SelectComponent.prototype.view = function(){
	return {
		//return the html with the databind;
	}
};

//This function will trigger each time the component changes
SelectComponent.prototype.onChange = function(){

};