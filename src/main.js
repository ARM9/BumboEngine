var DEBUG = true;

var g_stats;

var myCamera, myScreen, myScene;
function main(){
	g_stats = new Stats();
	g_stats.setMode(0);
	g_stats.domElement.style.position = 'absolute';
	g_stats.domElement.style.left = '0px';
	g_stats.domElement.style.top = '0px';
	document.body.appendChild(g_stats.domElement);
	
	var canvas = document.getElementById("mainCanvas");
	canvas.style.backgroundColor = "#3f94c9";

	myScreen = new Renderer(canvas, 640, 480);
    myScreen.setClearColor(0.1,0.3,0.5,1.0);

	myCamera = new Camera(90, 640/480, 10, 1000);

	myScene = new Scene();

    for(var i = 0; i < 50; i++){
	myScene.addChild(new Triangle(-0.5));
    myScene.addChild(new Triangle(0.5));
    myScene.addChild(new Triangle(0.0));
    }

	run();
}

function run(){
	requestAnimationFrame(run);

    myScreen.clear();
	myScreen.render(myScene);
	g_stats.update();
}

(function(){
	main();
}());
