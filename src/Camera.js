
var Camera = function(fov, aspect, near, far){
    this.matrix = mat4.create();
    mat4.perspective(this.matrix, fov, aspect, near, far);
};

Camera.prototype = {
	constructor: Camera,

    matrix: null,

	lookAt: function(eye, center, up){
        mat4.lookAt(this.matrix, eye, center, up);
	}
};
