
Key = {
	pressed: {},

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	isDown: function(keyCode){
		return Key.pressed[keyCode];
	},

	onKeyDown: function(event){
		Key.pressed[event.keyCode] = true;
	},

	onKeyUp: function(event){
		Key.pressed[event.keyCode] = false;
	}
};

