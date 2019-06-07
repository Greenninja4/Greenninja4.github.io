// Initialize variables
var gl; // WebGL context (where WebGL code runs)
var canvas; // HTML canvas (where WebGL context is displayed)

// Initializes WebGL context
function createGLContext(canvas) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;
  for (var i = 0; i < names.length; i++) {
    try {
      context = canvas.getContext(names[i]);
    } catch (e) { }
    if (context) {
      break;
    } 
  }
  if (context) {
    context.viewportWidth = canvas.width;
    context.viewportHeight = canvas.height;
  } else {
    alert("Failed to create WebGL context!");
  }
  return context;
}

// Setup to startup WebGL and link to HTML
function startup() {
  canvas = document.getElementById("glCanvas");
  gl = createGLContext(canvas);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
