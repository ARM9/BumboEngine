
var dat3d = function () {
	this._debug = false;
};

var myScreen, myScene;
function main()
{
	dat3d._debug = true;
	var canvas = document.getElementById("mainCanvas");
	canvas.style.backgroundColor = "#3f94c9";

	myScreen = new Renderer(canvas, 640, 480);

	myScene = new Scene();

	myCam = new Camera();

	bar = new Matrix3();
	run();
}

function run()
{
	requestAnimationFrame(run);
	myScreen.render(myScene);
}
(function(){
	"use strict";
	main();
}());
