// create a scene, that will hold all our elements such as objects, cameras and lights.


scene = new THREE.Scene();
//Base Apartment
var baseApartmentMaterial = mkBaseMaterial();
var baseApartment = new THREE.Mesh(new THREE.PlaneGeometry(150, 150, 15, 15), baseApartmentMaterial);
baseApartment.receiveShadow = true;
baseApartment.rotation.x = -Math.PI/2;

scene.add(baseApartment);


//SKYBOX TEXTURE
var directionsSky = ['Back','Front','Up','Down','Left', 'Right']
var texturesSky = ['TropicalSunnyDay','FullMoon']
var textureSky = 0;
var materialArray = [];
for (var i = 0; i < 6; i++)
	materialArray.push(new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture('textures/'+texturesSky[textureSky] + "/"+texturesSky[textureSky] + directionsSky[i] + "2048.png"),
		side: THREE.BackSide
	}));

var skybox_material = new THREE.MeshFaceMaterial(materialArray);
var skybox = new THREE.Mesh(new THREE.CubeGeometry(500, 500, 500), skybox_material);
skybox.color = new THREE.Color('#FFFFFF');
scene.add(skybox);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,1.5,50);
camera.up = new THREE.Vector3(0, 1,0);
camera.lookAt(scene.position);

// trackball controls
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


function mkBaseMaterial() {
	var texture = THREE.ImageUtils.loadTexture('textures/prato.jpg');
	var material = new THREE.MeshPhongMaterial({
		map: texture,
		shininess: 20
	})
	var normal = THREE.ImageUtils.loadTexture('textures/prato-norm.jpg');
	material.normalMap = normal;
	texture.repeat.set(20, 20);
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;	
	normal.repeat.set(20, 20);
	normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
	return material;
}
