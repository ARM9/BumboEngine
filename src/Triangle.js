
var Triangle = function(pos){
	this.vertices = [
		0.0+pos, 1.0, 1.0,
		-1.0+pos, -1.0, 1.0,
		1.0+pos, -1.0, 1.0];

	this.indices = [0, 1, 2];
};

Triangle.prototype = {
	constructor: Triangle,

	dt: 0.0,

	render: function(){
		this.dt += 0.001;
	}
};
