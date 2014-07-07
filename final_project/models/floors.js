function mkFloors (apartment) {
	console.log('Make floor');
	var mainFloor = mkMainFloor();
	mainFloor.position.set(.3,6.6,.32);
	apartment.add(mainFloor);
}

function mkMainFloor () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	// startpoint
	shape.moveTo(0, 0);

	// straight line upwards
	shape.lineTo(12.1, 0);
	shape.lineTo(12.1, -2.2);
	shape.lineTo(20.1, -2.2);
	shape.lineTo(20.1, 21.2);
	shape.lineTo(0,21.2);
	shape.lineTo(0,0);
	var floorGeometry = new THREE.ShapeGeometry(shape);
	var planeGeometry = new THREE.ExtrudeGeometry(shape,options);
	var plane = createMesh(planeGeometry, 'floor-wood.jpg');
	return plane;
}
function mkCorridorFloor () {
	// body...
}
function mkBathroomFloor () {
	// body...
}

function mkBalconyFloor () {
	// body...
}


function createMesh (geometry,image) {
	console.log('entrato0');
	material = mkTextureMaterial(image);
	var mesh = new THREE.Mesh(geometry,material);
	return mesh;	
}

function mkTextureMaterial(image) {
	console.log('entrato');
	var texture = THREE.ImageUtils.loadTexture("textures/" + texture);
	var material = new THREE.MeshPhongMaterial({
	map: texture,
	})
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	return material;
}

