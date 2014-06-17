var gl;

function initWebGL(canvas, width, height){
	"use strict";
	try{
		var contextAttributes = {
			alpha: true,
			antialias: true,
			depth: true,
			//stencil: false,
			premultipliedAlpha: true,
			preserveDrawingBuffer: false
		};
		if(dat3d._debug){
			gl = WebGLDebugUtils.makeDebugContext(canvas.getContext("experimental-webgl"), contextAttributes);
		}else{
			gl = canvas.getContext("experimental-webgl", contextAttributes);
		}

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
		alert("Failed to initialize webgl");
	}
}
