//The Object Model
function Model() {
	var name;
	var data;
}

// This function initializes the model's name 
// Param: name you would like to be set
Model.prototype.init = function(name){
	this.name = name;
	this.data = {};
};

//This function will obtain data for the model
//Param: file to return data from server
Model.prototype.bindData = function(file){
	var model = this;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       try {
	       		model.data = JSON.parse(xhttp.responseText);
	       }catch(e){
	       		console.log('Invalid JSON: ' + e);
	       }
	    }
	};
	xhttp.open("GET",file, true);
	xhttp.send();
};

//This function will display all properities(keys) of the data
//Param: None
Model.prototype.displayAll = function(){
	return Object.keys(this.data);
};

//This function will change the value for the given key in the model data
//Param: the key 
//Param: the new value 
Model.prototype.set = function(key,newValue){
	if(this.data.hasOwnProperty(key)){
		this.data[key] = newValue;
	}else{
		console.log("The key you provided does not exist");
	}
};

//This function will return a specific value for a given key
//Param: the key 
Model.prototype.get = function(key){
	if(this.data.hasOwnProperty(key)){
		return this.data[key];
	}else{
		console.log("The key you provided does not exist");
	}
};