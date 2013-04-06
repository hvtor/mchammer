$(function() {

	var url = "http://192.168.1.55:8071/motion-control/update";
	

	// MOVING FORWARD // A forward value of +1 represents the motor combination: {a: +1, s: +1, d: +1, f: +1}

	$(".north").on("click", function() {

	$.ajax(url, {dataType: "jsonp", data: {forward: +1}, success: function() {
		console.log("moving forward..");
	}});


	// MOVE BACKWARD // A forward value of -1 represents the motor combination: {a: -1, s: -1, d: -1, f: -1}

	$(".south").on("click", function() {
		console.log("turning right.."); 

	})

	$.ajax(url, {dataType: "jsonp", data: {forward: -1}, success: function() {
		console.log("moving backward..");
	}});

	// TURN RIGHT // A turn value of +1 represents the motor combination: {a: +1, s: -1, d: +1, f: -1}

	$(".east").on("click", function() {
		console.log("turning left");
	})

	$.ajax(url, {dataType: "jsonp", data: {turn: +1}, success: function() {
		console.log("turning right..[ DONE ]");
	});


	// TURN LEFT // A turn value of -1 represents the motor combination: {a: -1, s: +1, d: -1, f: +1}

	$(".west").on("click", function() {
		console.log("stopping..");
	$.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function() {
		console.log("turning right..");
	}});
	})

	// STRAFE RIGHT // A strafe value of +1 represents the motor combination: {a: +1, s: -1, d: -1, f: +1}

	$("strafeRight").on("click", function() {
		console.log("strafing right..");
	});

	$.ajax(url, {dataType: "jsonp", data: {strafe: +1}, success: function() {
		console.log("turning right..[ DONE ]");
	});

	//STRAFE LEFT //A strafe value of -1 represents the motor combination: {a: -1, s: +1, d: +1, f: +1}

	$("strafeLeft").on("click", function() {
		console.log("strafing left..");
	})

	$.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function() {
		console.log("turning right..[ DONE ]");
	})


