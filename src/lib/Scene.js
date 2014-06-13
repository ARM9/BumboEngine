
var Scene = function()
{
	this.m_ClearColor = [1.0, 1.0, 1.0, 1.0];
	gl.clearColor(0.25, 0.5, 0.72, 1.0);
	this.m_Nodes = new Array();
	this.m_Nodes.push(new Triangle());
}

Scene.prototype = {
	constructor: Scene,

	render: function(){
		gl.clear(gl.COLOR_BUFFER_BIT);
		for(var i = 0; i < this.m_Nodes.length; i++){
			this.m_Nodes[i].render();
		}
	}
};
