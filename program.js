//learnyounode 8th exercise: Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. 
//Collect all the data from the server (not just the first "data" event) and in 2 seperate lines write an integer representing the amount 
//of characters received from the server & the second line should contain the complete String of characters sent by the server.
var fs = require('fs');
var http = require('http');
var concat = require('concat-stream');
var concatStream = concat(piping);
var lst = process.argv;
var url = lst[2];
http.get(url, function(response){
	response.setEncoding("utf8");
	response.pipe(concatStream)
});

function piping (data){
	console.log(data.length);
	console.log(data); 
}


// .on("data", function (data){
// 	results = results + data;
// 	});
// 	console.log(results.length);
// 	console.log(results);



// //learnyounode 7th exercsie: write a program that performs an HTTP Get request to a URL provided to you as the first command-line argument. 
// // Write the String contents of each "data" event from the response to a new line on the console (stdout)
// var http = require('http');

// var lst = process.argv;
// var url = lst[2];
// http.get(url, function (response){
// 	response.setEncoding("utf8");
// 	//response is Node Stream object
// 	response.on("data", function (data){

// 		console.log(data);

// 	});
// })




// //----------------------------------------------------------------------------------------------------------------
// //learnyounode 6th exercise: using same problem below, write a module that handles most of the work. 
// var printing = require('./printing');
// var lst = process.argv;
// lst.splice(0, 2); 

// printing(lst[0], lst[1], function(error, data) {
// 	if (error){
// 		console.log(error);
// 	}
// 	else {

// 		console.log(data.join("\n"));
// 	}
// 	});


// //-----------------------------------------------------------------------------------------------------------
// //learnyounode 5th exercise: write a program that prints a list of files in a directory as well as their extension.
// var fs = require('fs'); 
// var path = require('path'); 
// var lst = process.argv; 
// lst.splice(0, 2); 
// fs.readdir(lst[0], function callback(err, list) {
// 	for (var i = 0; i < list.length; i++) {
// 		if (path.extname(list[i]) === "." + lst[1]){
// 			console.log(list[i]); 
// 		}
// 	} 
// })


// //---------------------------------------------------------------------------------------------------------------------------
// //learnyounode 4th exercise: write a program that uses asynchronous filesystem operation to read/print # of newlines.
// var fs = require('fs'); 
// var lst = process.argv;
// lst.splice(0, 2); 
// var filePath = lst[0]
// fs.readFile(filePath, function (err, contents) {
// 	var fileContents = contents.toString().split('\n'); 
// 	if (fileContents.length > 0){
// 		var contentLen = fileContents.length - 1;
// 	} else {
// 		var contentLen = fileContents.length;
// 	}
// 	console.log(contentLen);		
// })


// //----------------------------------------------------------------------------------
// //learnyounode 3rd exercise: read file path from argv and count # of newlines
// var fs = require('fs')
// var lst = process.argv; 
// lst.splice(0,2); //splicing args to get file path

// //fileContents will now be the string of the buffer given to us by readFileSync
// var fileContents = fs.readFileSync(lst[0]).toString();

// fileContents = fileContents.split('\n')
// if (fileContents.length > 1){
// 	var contentLen = fileContents.length - 1;
// } else {
// 	var contentLen = fileContents.length;
// }
// console.log(contentLen);


// //--------------------------------------------------------------
// //learnyounode second exercise: add all #'s from stdin
// var lst = process.argv;
// lst.splice(0, 2);
// var total = 0;

// for (var i = 0; i < lst.length; i++){
// 	total += Number(lst[i])

// } 
// console.log(total);
