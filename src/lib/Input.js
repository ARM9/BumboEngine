
Keys = {
	pressed: {},

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	isDown: function(keyCode){
		return Keys.pressed[keyCode];
	},

	onKeyDown: function(event){
		Keys.pressed[event.keyCode] = true;
	},

	onKeyUp: function(event){
		Keys.pressed[event.keyCode] = false;
	}
};

