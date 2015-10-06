//learnyounode 5th exercise: write a program that prints a list of files in a directory as well as their extension.


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
