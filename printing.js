//The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program.



//The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data.
var fs = require('fs');
var path = require('path');


module.exports = function (dir, ext, print) {
	fs.readdir(dir, function callback(err, list) {	
		if (err) {
			return print(err);
		}
	else {
		var myArray = [];
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === "." + ext) {
				myArray.push(list[i]);
			}
		}
		print(null, myArray); 
	}
	}) ;
}

	