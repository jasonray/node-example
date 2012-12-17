function start() {
	console.log("Request handler 'start' was called.");
}

function upload() {
	console.log("Request handler 'upload' was called.");
}

function echo() {
	console.log("--echo--");
}

exports.start = start;
exports.upload = upload;