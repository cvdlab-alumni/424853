function mkFloors (apartment) {
	//console.log('Make floor');
	var mainFloor = mkMainFloor();
	mainFloor.position.set(.3,6.6,.32);
	apartment.add(mainFloor);
	
	var corridorFloor = mkCorridorFloor();
	corridorFloor.position.set(.3,27.8,.32);
	apartment.add(corridorFloor);

	var bathroomFloor = mkBathroomFloor();
	bathroomFloor.position.set(12.3,27.8,.32);
	apartment.add(bathroomFloor);

	var balconyFloor = mkBalconyFloor();
	balconyFloor.position.set(.3,.1,.32);
	apartment.add(balconyFloor);
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
	var plane = createMesh(planeGeometry, "floor-wood.jpg");
	plane.material.map.repeat.set(.3,.2);
	return plane;
}
function mkCorridorFloor () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	// startpoint
	shape.moveTo(0, 0)

	// straight line upwards
	shape.lineTo(12, 0);
	shape.lineTo(12, 9);
	shape.lineTo(0,9);
	shape.lineTo(0,0);
	var floorGeometry = new THREE.ShapeGeometry(shape);
	var planeGeometry = new THREE.ExtrudeGeometry(shape,options);
	var plane = createMesh(planeGeometry, "floor-wood.jpg");
	plane.material.map.repeat.set(.3,.2);
	return plane;
}
function mkBathroomFloor () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	// startpoint
	shape.moveTo(0, 0)

	// straight line upwards
	shape.lineTo(8, 0);
	shape.lineTo(8, 9);
	shape.lineTo(0,9);
	shape.lineTo(0,0);
	var floorGeometry = new THREE.ShapeGeometry(shape);
	var planeGeometry = new THREE.ExtrudeGeometry(shape,options);
	var plane = createMesh(planeGeometry, "bathroom-floor.jpg");
	return plane;

}

function mkBalconyFloor () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	// startpoint
	shape.moveTo(0, 0)

	// straight line upwards
	shape.lineTo(12, 0);
	shape.lineTo(12, 6.3);
	shape.lineTo(0,6.3);
	shape.lineTo(0,0);
	var floorGeometry = new THREE.ShapeGeometry(shape);
	var planeGeometry = new THREE.ExtrudeGeometry(shape,options);
	var plane = createMesh(planeGeometry, "balcony-floor.jpg");
	//plane.material.map.repeat.set(.3,.2);
	return plane;
}


function createMesh (geometry,image) {
	
	material = mkTextureMaterial(image);
	var mesh = new THREE.Mesh(geometry,material);
	return mesh;	
}

function mkTextureMaterial(image) {
	
	var texture = THREE.ImageUtils.loadTexture("textures/" + image);
	var material = new THREE.MeshPhongMaterial({
	map: texture,
	shininess: 5
	})
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	return material;
}

