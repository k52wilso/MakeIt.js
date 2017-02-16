
function Controller(name){
	this.name = name;
}


 /*
	e.g. var controller = new Controller();
		 controller.request('/',function(response){
				
		 },'GET');
 */

 /*This function will make a request*/
 //Param: route, where to go,what to get,what to do
 //Param: method, GET or POST
 //Param: data , optional param if it is a POST request
 //Return: an object containing data if successful, 
Controller.prototype.requestData = function(route,method,data){
	var returnedData = {};
	var xhttp = new XMLHttpRequest();
	if(method == 'GET'){
			xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       try {
		       		returnedData.data = JSON.parse(xhttp.responseText);
		       }catch(e){
		       		console.log('Invalid JSON: ' + e);
		       }
		    }
		};
		xhttp.open("GET",'.' + route, true);
		xhttp.send();
	}else if(method == 'POST'){
		xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       try {
	       		if(xhttp.responseText.length == 0){
	       			//no data was sent back to browser
	       		}else{
	       			returnedData.data = JSON.parse(xhttp.responseText);
	       		}
	       }catch(e){
	       		console.log('Invalid JSON: ' + e);
	       }
		    }
		};
		xhttp.open("POST",'.' + route, true);
		xhttp.send(data);
	}
	return returnedData;
};

 /*This function will make a request to get a page or template*/
 //Param: route, where to go,what to get,what to do
 //Param: method, GET or POST
 //Return: return an object containing the page or template 
Controller.prototype.requestPage = function(route){

}