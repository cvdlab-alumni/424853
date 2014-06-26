function mkRoomFloor () {

  // create a basic shape
	var shape = new THREE.Shape();

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
  var floorTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/floor-wood.jpg' );
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
  floorTexture.repeat.set( .1, .1 );

  var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
  
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  return floor;
}

function mkBalconyFloor(){
  var floorGeometry = new THREE.PlaneGeometry(12,6.3);
  var floorTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/floor-wood.jpg' );
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
  floorTexture.repeat.set( .1, .1 );

  var floorMaterial = new THREE.MeshPhongMaterial( { map: floorTexture, side: THREE.DoubleSide } );
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  return floor;

}
function mkCorridorFloor () {

  // create a basic shape
	// create a basic shape
  var shape = new THREE.Shape();

  // startpoint
  shape.moveTo(0, 0)

  // straight line upwards
  shape.lineTo(12, 0);
  shape.lineTo(12, 9);
  shape.lineTo(0,9);
  shape.lineTo(0,0);
  var floorGeometry = new THREE.ShapeGeometry(shape);
  var floorTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/floor-wood.jpg' );
  floorTexture.wrapS = THREE.RepeatWrapping; 
  floorTexture.wrapT = THREE.RepeatWrapping; 
  //floorTexture.repeat.set(.08, .1 );
  floorTexture.repeat.set(.1,.1);
  var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
  
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  return floor;
}

function mkBathroomFloor (callback) {
  var planeGeometry = new THREE.PlaneGeometry(8,9);
  var planeMaterial = new THREE.MeshLambertMaterial({ ambient: 0xFFFFff,
       specular: 0xffffff, shininess: 10, shading: THREE.SmoothShading });
  //var plane = new THREE.Mesh(planeGeometry,planeMaterial);

  var planeTexture;
  createMesh(planeGeometry, "bathroomprova.jpg", "bathroomprova-bump.jpg", function (mesh) {
    planeTexture = mesh;
    planeTexture.material.map.wrapT = planeTexture.material.map.wrapS = THREE.RepeatWrapping;
    o = planeTexture;
    planeTexture.material.map.repeat.set(8,8);



    callback && callback(planeTexture);
  });
}

function createMesh(geom, imageFile, bump, callback) {
    THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile, undefined, function (texture) {
    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
      mat.bumpMap = bump;
      mat.bumpScale = 0.5;
    }

    var mesh = new THREE.Mesh(geom, mat);

    callback && callback(mesh);
  });
  

}