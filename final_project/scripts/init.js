// create a scene, that will hold all our elements such as objects, cameras and lights.

scene = new THREE.Scene();



// create a camera, which defines where we're looking at.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,1,50);
camera.up = new THREE.Vector3(0, 1,0);
// position and point the camera to the center of the scene
camera.lookAt(scene.position);

// create trackball controls
var trackballControls = new THREE.TrackballControls(camera);
var apartment = new THREE.Object3D();
var axisHelper = new THREE.AxisHelper(3);
scene.add(axisHelper);

// mouse interaction
var projector = new THREE.Projector();
document.addEventListener('mousedown', onDocumentMouseDown, false);
var toIntersect = [];

// create a render and set the size
var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);


// first person controls
var FPenabled = false;
var controls;
var objects = [];
var rayMove = new THREE.Raycaster();
rayMove.ray.direction.set(0, 1, 0);
var rayPointer = new THREE.Raycaster();
