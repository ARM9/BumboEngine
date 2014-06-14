
var Triangle = function(pos)
{
	this.vertices = [
		0.0+pos, 1.0, 0.5,
		-1.0+pos, -1.0, 0.5,
		1.0+pos, -1.0, 0.5];

	this.indices = [0, 1, 2];

	this.m_VerticesVbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

	this.m_IndicesVbo = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_IndicesVbo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, gl.NULL);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.NULL);
}

Triangle.prototype = {
	constructor: Triangle,

	dt: 0.0,

	render: function(){
		this.dt += 0.001;

		gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo);
		gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_IndicesVbo);
		gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
	}
};
