var gl;

function initWebGL(canvas, width, height)
{
	try{
		gl = canvas.getContext('experimental-webgl');

		/* internal rendering resolution */
		canvas.width = width;
		canvas.height = height;

		gl.contextWidth = canvas.width;
		gl.contextHeight = canvas.height;

		canvas.addEventListener("webglcontextlost", function(event) {event.preventDefault();}, false);
		canvas.addEventListener("webglcontextrestored", main, false);
	}catch(err){
		throw new Error(err);
	}
	if(!gl){
		alert('Failed to initialize webgl');
	}
}
