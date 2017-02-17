//The Object Model
function Model() {
	var name;
	var data;
}


//Function: initialize the model
//Parameter: name -> the name of the model
Model.prototype.init = function(name){
	this.name = name;
	this.data = {};
};


//Function: Bind Data to the Model
//Parameter: file -> the name of the file that will fetch the data
//Parameter: callback -> a function to be executed once data is binded
Model.prototype.bindData = function(file,callback){
	var model = this;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       try {
	       		model.data = JSON.parse(xhttp.responseText);
	       		callback();
	       }catch(e){
	       		console.log('Invalid JSON: ' + e);
	       }
	    }
	};
	xhttp.open("GET",file, true);
	xhttp.send();
};


//Function: Display all the data within the model
//Parameter: None
Model.prototype.displayAll = function(){
	return Object.keys(this.data);
};


//Function: Update the model
//Parameter: key -> the key for the model data
//Parameter: newValue -> the newValue for the specified key
Model.prototype.set = function(key,newValue){
	if(this.data.hasOwnProperty(key)){
		this.data[key] = newValue;
	}else{
		console.log("The key you provided does not exist");
	}
};


//Function: get the value at the specified key
//Parameter: key -> the key for the model
Model.prototype.get = function(key){
	if(this.data.hasOwnProperty(key)){
		return this.data[key];
	}else{
		console.log("The key you provided does not exist");
	}
};