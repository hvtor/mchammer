// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



$(function() {

console.log("Test1");
window.ondeviceorientation = function(event){

	console.log("Test2");
	var a = Math.round(event.alpha*1/1);
	var b = Math.round(event.beta*1/1);
	var g = Math.round(event.gamma*1/1);
	console.log(a);
	console.log(b);
	console.log(g);
};

window.ondeviceorientation();


// var orientation = window.orientation;
// switch(orientation) {




// }




// var url = "http://192.168.1.54:8071/motion-control/update";

// function action(selector, _data, message) {
//   $(selector).on("click", function() {
// 	console.log(selector)
//     $.ajax(url, { dataType: "jsonp", data: _data, success: function() {
//       console.log(message);
//     }})
//   })
// }

//   action(".north", {forward: +1}, "moving forward..");
//   action(".south", {forward: -1}, "moving backward..");
//   action(".east", {turn: +1}, "turning right..");
//   action(".west", {turn: -1}, "turning left..");
//   action(".strafeRight", {strafe: +1}, "strafing right..");
//   action(".strafeLeft", {strafe: -1}, "strafing left..");
//   action(".gamePad", {forward:0}, "stopping..");

// })

// });