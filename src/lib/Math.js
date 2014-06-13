
/* Ugh, just use glm */

var Vector3 = function(x, y, z)
{
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
};

Vector3.prototype = {
	constructor: Vector3,

	set: function(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	},

	copy: function(v){
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	},

	add: function(b){
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		return this;
	},

	sub: function(b){
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
		return this;
	},

	mult: function(b){
		this.x *= b.x;
		this.y *= b.y;
		this.z *= b.z;
		return this;
	},

	multScalar: function(s){
		this.x *= s;
		this.y *= s;
		this.z *= s;
		return this;
	},

	magnitude: function(){
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},

	dot: function(b){
		return this.x * b.x + this.y * b.y + this.z * b.z;
	},

	cross: function(b){
		var ax = this.x, ay = this.y, az = this.z;

		this.x = ay * b.z - az * b.y;
		this.y = az * b.x - ax * b.z;
		this.z = ax * b.y - ay * b.x;
		return this;
	}
};

var Vector2 = function(x, y)
{
	this.x = x || 0;
	this.y = y || 0;
};

Vector2.prototype = {
	constructor: Vector2,

	set: function(x, y){
		this.x = x;
		this.y = y;
		return this;
	},

	copy: function(v){
		this.x = v.x;
		this.y = v.y;
		return this;
	},

	add: function(b){
		this.x += b.x;
		this.y += b.y;
		return this;
	},

	sub: function(b){
		this.x -= b.x;
		this.y -= b.y;
		return this;
	},

	mult: function(b){
		this.x *= b.x;
		this.y *= b.y;
		return this;
	},

	multScalar: function(s){
		this.x *= s;
		this.y *= s;
		return this;
	},

	magnitude: function(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	dot: function(b){
		return this.x * b.x + this.y * b.y;
	},

	wedge: function(other){
		return this.x * other.y - this.y * other.x;
	}
}

var Matrix3 = function()
{
	this.elements = new Float32Array(9);
	var t = this.elements;
	t[0] = 1; t[3] = 0; t[6] = 0;
	t[1] = 0; t[4] = 1; t[7] = 0;
	t[2] = 0; t[5] = 0; t[8] = 1;
}

/* column major */
Matrix3.prototype = {
	constructor: Matrix3,

	set: function (n11, n12, n13, n21, n22, n23, n31, n32, n33){
		var t = this.elements;
		t[0] = n11; t[3] = n12; t[6] = n13;
		t[1] = n21; t[4] = n22; t[7] = n23;
		t[2] = n31; t[5] = n32; t[8] = n33;
		return this;
	},

	identity: function(){
		this.set(1,0,0,
				 0,1,0,
				 0,0,1);
		return this;
	},

	/* multiply by 3x3 matrix
	multMat3: function(b){
		var t = this.elements;
		t[0]
	}*/
};

