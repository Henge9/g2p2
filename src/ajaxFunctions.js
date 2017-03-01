import React from 'react';

//you have to import the ajax funktion in your module:
//import { ajax } from '../../ajaxFunctions.js';

//example for local use: ajax('GET', 'http://localhost:80/rest/tablename?column=asd')
//you may have to install a addon in chrome to allow acces: (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)

export function ajax(method, url){
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.send(null);

	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
  		if (xhr.readyState === DONE) {
    		if (xhr.status === OK) {
      			console.log(xhr.responseText); // 'This is the returned text.'
      			return xhr.responseText;
    		} else {
      			console.log('Error: ' + xhr.status); // An error occurred during the request.
    		}
  		}
	}
}
export function test(){
	alert('funkar');
}