
var Shader = function()
{
	// public
	this.vsAttributes = new Array();
	// todo: protected
	this.m_Program = gl.createProgram();
	this.m_Shaders = new Array();
}

Shader.prototype = {
	constructor: Shader,

	load: function(type, str){
		var shaderName = gl.createShader(type);
		gl.shaderSource(shaderName, str);
		gl.compileShader(shaderName);

		if(!gl.getShaderParameter(shaderName, gl.COMPILE_STATUS)){
			throw new Error(gl.getShaderInfoLog(shaderName));
			return null;
		}

		this.m_Shaders.push(shaderName);
	},

	link: function(){
		if(this.m_Shaders.length === 0){
			console.error("Error: no compiled shaders found for program.");
			return null;
		}

		for(var i = 0; i < this.m_Shaders.length; i++){
			gl.attachShader(this.m_Program, this.m_Shaders[i]);
		}

		gl.linkProgram(this.m_Program);
		if(!dat3d._debug)
			this.deleteShaders();

		if(!gl.getProgramParameter(this.m_Program, gl.LINK_STATUS)){
			throw new Error(gl.getProgramInfoLog(this.m_Program));
			return null;
		}
		return true;
	},

	use: function(){
		gl.useProgram(this.m_Program);
	},
	/* todo: protected */
	deleteShaders: function(){
		for(var i = 0; i < this.m_Shaders.length; i++){
			gl.detachShader(this.m_Program, this.m_Shaders[i]);
			gl.deleteShader(this.m_Shaders[i]);
		}
		delete this.m_Shaders;
	},

	getAttribLocation: function(name){
		gl.getAttribLocation(this.m_Program, name);
	}
};
