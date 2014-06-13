
var Renderer = function(canvas, width, height)
{
	// size of canvas element
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	initWebGL(canvas, width, height);

	//gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.CULL_FACE);

	var vs = '\
attribute vec3 aVertexPosition;\n\
varying vec3 vVertexPosition;\n\
void main()\n\
{\n\
	vVertexPosition = aVertexPosition;\n\
	gl_Position = vec4(aVertexPosition, 1.0);\n\
}';
	var fs = '\
precision mediump float;\n\
varying vec3 vVertexPosition;\n\
void main()\n\
{\n\
	gl_FragColor = vec4(vVertexPosition, 1.0);\n\
}';
	this.m_FlatShader = new Shader();
	this.m_FlatShader.load(gl.VERTEX_SHADER, vs);
	this.m_FlatShader.load(gl.FRAGMENT_SHADER, fs);
	this.m_FlatShader.link();

	this.vsattr = gl.getAttribLocation(this.m_FlatShader.m_Program, 'aVertexPosition');

};

Renderer.prototype = {
	constructor: Renderer,

	render: function(scene){
		gl.viewport(0, 0, gl.contextWidth, gl.contextHeight);
		this.m_FlatShader.use();
		gl.enableVertexAttribArray(this.vsattr);
		scene.render();
	}
};
