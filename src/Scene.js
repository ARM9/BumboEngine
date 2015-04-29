
var Scene = function(){
    this.m_Nodes = [];
    this.m_vertices = [];
    this.m_nindices = 0;

	this.m_VerticesVbo = gl.createBuffer();
    this.m_VerticesVbo.itemSize = 3;
};

Scene.prototype = {
	constructor: Scene,

	addChild: function(child){
		this.m_Nodes.push(child);

        //this.m_vertices.push.apply(this.m_vertices, child.vertices);
        for(var i = 0; i < child.vertices.length; i++){
            this.m_vertices.push(child.vertices[i]);
        }

        this.m_nindices += child.vertices.length / this.m_VerticesVbo.itemSize;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.m_vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
	},

	render: function(){

		gl.bindBuffer(gl.ARRAY_BUFFER, this.m_VerticesVbo);
		gl.vertexAttribPointer(0, this.m_VerticesVbo.itemSize, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, this.m_nindices);

		for(var i = 0; i < this.m_Nodes.length; i++){
			//this.m_Nodes[i].render();
		}
	}
};
