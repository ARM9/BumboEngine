
function Renderer(canvas, width, height)
{
	/* size of canvas element */
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	initWebGL(canvas, width, height);

	var vs = '\n\
precision mediump float;\n\
attribute vec3 aVertexPos;\n\
varying vec3 vVertexPos;\n\
void main()\n\
{\n\
	gl_Position = vec4(aVertexPos, 1.0);\n\
}';
	var fs = '\n\
precision mediump float;\n\
varying vec3 vVertexPos;\n\
void main()\n\
{\n\
	gl_FragColor = vec4(vVertexPos, 1.0);\n\
}';
	this.m_FlatShader = new Shader();
	this.m_FlatShader.load(gl.VERTEX_SHADER, vs);
	this.m_FlatShader.load(gl.FRAGMENT_SHADER, fs);
	this.m_FlatShader.link();
}

Renderer.prototype = {
	constructor: Renderer,

	render: function(scene){
		this.m_FlatShader.use();
		scene.render();
	}
};

var myScreen, myScene;
function main()
{
	var canvas = document.getElementById('mainCanvas');
	canvas.style.backgroundColor = '#3f94c9';

	myScreen = new Renderer(canvas, 640, 480);

	myScene = new Scene();
	run();
}

function run()
{
	requestAnimationFrame(run);
	myScreen.render(myScene);
}

(function(){
	main();
}());
