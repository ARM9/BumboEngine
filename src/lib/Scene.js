
var Scene = function()
{
	this.m_Nodes = new Array();
	this.m_Nodes.push(new Triangle());
}

Scene.prototype = {
	constructor: Scene,

	render: function(){
		for(var i = 0; i < this.m_Nodes.length; i++){
			this.m_Nodes[i];
		}
	}
};
