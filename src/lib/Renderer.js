
var Renderer = function(canvas, width, height)
{
	// size of canvas element
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	initWebGL(canvas, width, height);

	var vs = '\
attribute vec3 aVertexPos;\n\
varying vec3 vVertexPos;\n\
void main()\n\
{\n\
	gl_Position = vec4(aVertexPos, 1.0);\n\
}';
	var fs = '\
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
		gl.viewport(0, 0, gl.contextWidth, gl.contextHeight);
		this.m_FlatShader.use();
		scene.render();
	}
};
