
/*
	Todo: bind attrib locations
*/
var Triangle = function()
{
	this.vertices = [
		0.0, 1.0, 1.0,
		1.0, -1.0, 1.0,
		-1.0, 1.0, 1.0];
	this.indices = [0, 1, 2];

	this.m_VerticesVbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

	this.m_IndicesVbo = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_IndicesVbo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(this.indices), gl.STATIC_DRAW);

}

Triangle.prototype = {
	constructor: Triangle,

	render: function(){
		gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo);
		gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_IndicesVbo);
		gl.vertexAttribPointer(0, 1, gl.UNSIGNED_BYTE, false, 0, 0);
		gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_BYTE, 0);
	}
};
