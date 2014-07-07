function mkWalls (apartment) {
	var mainRoom = mkMainRoomWall();
	mainRoom.position.set(0,6.6,0);
	apartment.add(mainRoom);

	var balcony = mkBalconyWall();
	balcony.position.set(.31,.11,.3);
	apartment.add(balcony);

	var corridor = mkCorridorWall();
	corridor.position.set(.31,27.79,.3);
	apartment.add(corridor);

	var bathroom = mkBathroomWall();
	bathroom.position.set(12.41,27.79,.3);
	apartment.add(bathroom);

	var externalWalls = mkExternalWalls();
	externalWalls.position.set(0,0,0);
	apartment.add(externalWalls);
}


/******************************************************/
/*Wall of MAIN ROOM					   				  */
/******************************************************/
function mkMainRoomWall () {
	var mainRoom = new THREE.Object3D();

	var wall1 = mkMainRoom_wall1();
	wall1.position.set(.3,20.99,.3);
	mainRoom.add(wall1);

	var wall2 = mkMainRoom_wall2();
	var wall2_1 = mkMainRoom_wall2();
	wall2.position.set(.31,0,.3);
	wall2_1.position.set(20.39,0,.3);
	mainRoom.add(wall2);
	mainRoom.add(wall2_1);

	var wall3 = mkMainRoom_wall3();
	wall3.position.set(.31,0.01,.3);
	mainRoom.add(wall3);

	var kitchenWall = mkKitchenWall();
	kitchenWall.position.set(12.41,-2.2,.3);
	mainRoom.add(kitchenWall);
	return mainRoom;


}

function mkMainRoom_wall1 () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(10.7, 0);
	shape.lineTo(10.7, 2.4);
	shape.lineTo(12,2.4);
	shape.lineTo(12,0);
	shape.lineTo(20.1,0);
	shape.lineTo(20.1,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "mainRoom-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;
}

function mkMainRoom_wall2 () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(21, 0);
	shape.lineTo(21, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "mainRoom-wall.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
}

function mkMainRoom_wall3 () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	var shape = new THREE.Shape();
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(8.5, 0);
	shape.lineTo(8.5, 2.4);
	shape.lineTo(10.5,2.4);
	shape.lineTo(10.5,0);
	shape.lineTo(12.1,0);
	shape.lineTo(12.1,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "mainRoom-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;
}

function mkKitchenWall () {
	console.log('make kitchenWall');
	var kitchenWall = new THREE.Object3D();
	
	var kitchenWallLf = mkKitchenWall_side();
	kitchenWallLf.position.set(0,0,0);
	kitchenWall.add(kitchenWallLf);

	var kitchenWallRg = mkKitchenWall_side();
	kitchenWallRg.position.set(7.98,0,0);
	kitchenWall.add(kitchenWallRg);

	var kitchenWallFront = mkKitchenWall_front();
	kitchenWallFront.position.set(0,.01,0);
	kitchenWall.add(kitchenWallFront);

	return kitchenWall;
}

function mkKitchenWall_side () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(2.2, 0);
	shape.lineTo(2.2, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "kitchen-wall.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
}

function mkKitchenWall_front () {
	
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(8, 0);
	shape.lineTo(8, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "kitchen-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;
}


/******************************************************/
/*Wall of BALCONY 									  */
/******************************************************/
function mkBalconyWall () {
	var balcony = new THREE.Object3D();
	var wall1 = mkBalconyWall_1();
	wall1.position.set(0,6.28,0);
	balcony.add(wall1);

	var wall2_1 = mkBalconyWall_2();
	wall2_1.position.set(0,4,0);
	balcony.add(wall2_1);

	var wall2_2 = mkBalconyWall_2();
	wall2_2.position.set(11.98,4,0);
	balcony.add(wall2_2);

	var wall3_1 = mkBalconyWall_3();
	wall3_1.position.set(0,0,0);
	balcony.add(wall3_1);

	var wall3_2 = mkBalconyWall_3();
	wall3_2.position.set(11.98,0,0);
	balcony.add(wall3_2);

	var wall4 = mkBalconyWall_4();
	wall4.position.set(0,0,0);
	balcony.add(wall4);

	return balcony;

}

//wall with the door
function mkBalconyWall_1 () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(8.5, 0);
	shape.lineTo(8.5, 2.4);
	shape.lineTo(10.5,2.4);
	shape.lineTo(10.5,0);
	shape.lineTo(12,0);
	shape.lineTo(12,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);

	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "balcony/balcony-wall.jpg","balcony/balcony-wall-bump.jpg");
    wall.rotation.x = Math.PI/2;
    return wall; 
}

//wall side balcony with bump
function mkBalconyWall_2 () {

	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(2.3, 0);
	shape.lineTo(2.3, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "balcony/balcony-wall.jpg","balcony/balcony-wall-bump.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
	
}

//wall side balcony height 1.5m
function mkBalconyWall_3 () {

	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(4, 0);
	shape.lineTo(4, 1.5);
	shape.lineTo(0,1.5);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "balcony/balcony-plaster-wall.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;	
}

//Wall front balcony height 1.5m 
function mkBalconyWall_4 () {
	var shape = new THREE.Shape();
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(12, 0);
	shape.lineTo(12, 1.5);
	shape.lineTo(0,1.5);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "balcony/balcony-plaster-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;	
}

/******************************************************/
/*Wall of CORRIDOR 									  */
/******************************************************/
function mkCorridorWall () {
	var corridorWall = new THREE.Object3D();
	
	var corridorWall1 = mkCorridorWall_1();
	corridorWall1.position.set(0,8.99,0);
	corridorWall.add(corridorWall1);

	var corridorWall2 = mkCorridorWall_2();
	corridorWall2.position.set(11.98,0,0);
	corridorWall.add(corridorWall2);

	var corridorWall3 = mkCorridorWall_3();
	corridorWall3.position.set(0,.03,0);
	corridorWall.add(corridorWall3);

	var corridorWall4 = mkCorridorWall_4();
	corridorWall4.position.set(.01,0,0);
	corridorWall.add(corridorWall4);

	return corridorWall;
}

//Wall with input dorr
function mkCorridorWall_1 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
 	// startpoint
  	shape.moveTo(0, 0);		
	// straight line upwards
	shape.lineTo(9.2, 0);
	shape.lineTo(9.2, 2.4);
	shape.lineTo(10.5,2.4);
	shape.lineTo(10.5,0);
	shape.lineTo(12,0);
	shape.lineTo(12,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "corridor-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;		
}

//wall with bathroom door
function mkCorridorWall_2 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(1, 0);
	shape.lineTo(1, 2.4);
	shape.lineTo(2.3,2.4);
	shape.lineTo(2.3,0);
	shape.lineTo(9,0);
	shape.lineTo(9,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "corridor-wall.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
}

//wall with Mainroom door
function mkCorridorWall_3 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(10.7, 0);
	shape.lineTo(10.7, 2.4);
	shape.lineTo(12,2.4);
	shape.lineTo(12,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "corridor-wall.jpg");
    wall.rotation.x = Math.PI/2;
    return wall;
}

//wall without door
function mkCorridorWall_4 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(9, 0);
	shape.lineTo(9, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "corridor-wall.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
}


/******************************************************/
/*Wall of bathroom 									  */
/******************************************************/

function mkBathroomWall () {
	var bathroomWall = new THREE.Object3D();
	
	var bathroomWall1 = mkBathroomWall_1();
	bathroomWall1.position.set(0,0,0);
	bathroomWall.add(bathroomWall1);

	var bathroomWall2 = mkBathroomWall_2();
	bathroomWall2.position.set(0,0.02,0);
	bathroomWall.add(bathroomWall2);
	
	var bathroomWall2_1 = mkBathroomWall_2();
	bathroomWall2_1.position.set(0,8.98,0);
	bathroomWall.add(bathroomWall2_1);

	var bathroomWall3 = mkBathroomWall_3();
	bathroomWall3.position.set(7.98,0,0);
	bathroomWall.add(bathroomWall3);

	//Bathroom Light
      var pointColor = "#00ff00";
       pointLight = new THREE.PointLight(pointColor);
      pointLight.distance = 10;

      pointLight.position.set(4,4,3);
      

      bathroomWall.add(pointLight);
      
      
      

	return bathroomWall;
}

//wall with the door
function mkBathroomWall_1 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(1, 0);
	shape.lineTo(1, 2.4);
	shape.lineTo(2.3,2.4);
	shape.lineTo(2.3,0);
	shape.lineTo(9,0);
	shape.lineTo(9,3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);	
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "bathroom/bathroom-wall.jpg","bathroom/bathroom-wall-bump.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall;
}

//wall without door. Front wall 
function mkBathroomWall_2 () {
	var shape = new THREE.Shape();
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(8, 0);
	shape.lineTo(8, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);	
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "bathroom/bathroom-wall.jpg","bathroom/bathroom-wall-bump.jpg");
    wall.rotation.x = Math.PI/2;
    return wall; 
}

//wall without door. Side wall 
function mkBathroomWall_3 () {
	
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
 	// startpoint
  	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(9, 0);
	shape.lineTo(9, 3);
	shape.lineTo(0,3);
	shape.lineTo(0,0);	
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "bathroom/bathroom-wall.jpg","bathroom/bathroom-wall-bump.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall; 
}

/******************************************************/
/*EXTERNAL WALLS of apartment		   				  */
/******************************************************/
function mkExternalWalls () {
	var externalWalls = new THREE.Object3D();
	
	var doorInputWall = mkExternalWall_DoorInput();
	doorInputWall.position.set(0,37.12,0);
	externalWalls.add(doorInputWall);

	var sideLeftWall = mkExternalWall_SideLeft();
	sideLeftWall.position.set(-.02,37.1,0);
	externalWalls.add(sideLeftWall);

	var sideRightWall = mkExternalWall_SideRight();
	sideRightWall.position.set(20.72,4.1,0);
	externalWalls.add(sideRightWall);


	var frontWall = mkExternalWall_Front();
	frontWall.position.set(0,-.02,0);
	externalWalls.add(frontWall);

	return externalWalls;

}

function mkExternalWall_DoorInput() {
 	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(9.5, 0);
	shape.lineTo(9.5, 2.7);
	shape.lineTo(10.8,2.7);
	shape.lineTo(10.8,0);
	shape.lineTo(20.7,0);
	shape.lineTo(20.7,3.3);
	shape.lineTo(0,3.3);
	shape.lineTo(0,0);
	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
    wall.rotation.x = Math.PI/2;
    return wall; 
}

function mkExternalWall_SideLeft () {
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
	
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(37.1, 0);
	shape.lineTo(37.1, 1.8);
	shape.lineTo(33,1.8);
	shape.lineTo(33,3.3);
	shape.lineTo(0,3.3);
	shape.lineTo(0,0);

	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = -Math.PI/2;
    return wall; 
}

function mkExternalWall_SideRight () {
	var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
	
	shape.moveTo(0, 0)		
	// straight line upwards
	shape.lineTo(33, 0);
	shape.lineTo(33,3.3);
	shape.lineTo(0,3.3);
	shape.lineTo(0,0);

	var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
    wall.rotation.x = Math.PI/2;
    wall.rotation.y = Math.PI/2;
    return wall; 
}

function mkExternalWall_Front () {

	var front = new THREE.Object3D();

	frontBalcony = mkFrontBalcony();
	front.add(frontBalcony);

	frontApartment = mkFrontApartment();
	frontApartment.position.set(12.4,4.1,0);
	front.add(frontApartment);

	sideBalcony = mkSideBalcony();
	sideBalcony.position.set(12.42,0,0);
	front.add(sideBalcony);



	function mkFrontBalcony () {
		var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
		var shape = new THREE.Shape();
		
		shape.moveTo(0, 0)		
		// straight line upwards
		shape.lineTo(12.4, 0);
		shape.lineTo(12.4,1.8);
		shape.lineTo(0,1.8);
		shape.lineTo(0,0);

		var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
	    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
	    wall.rotation.x = Math.PI/2;
	    return wall; 
		
	}

	function mkSideBalcony () {
		var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
		var shape = new THREE.Shape();
		
		shape.moveTo(0, 0)		
		// straight line upwards
		shape.lineTo(4.1, 0);
		shape.lineTo(4.1,1.8);
		shape.lineTo(0,1.8);
		shape.lineTo(0,0);

		var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
	    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
	    wall.rotation.x = Math.PI/2;
	    wall.rotation.y = Math.PI/2;
	    return wall;
	}

	function mkFrontApartment () {
		var options = {amount: 0,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
		var shape = new THREE.Shape();
		
		shape.moveTo(0, 0)		
		// straight line upwards
		shape.lineTo(8.3, 0);
		shape.lineTo(8.3,3.3);
		shape.lineTo(0,3.3);
		shape.lineTo(0,0);

		var wallGeometry = new THREE.ExtrudeGeometry(shape,options);
	    var wall = createMesh(wallGeometry, "external/external-wall.jpg","external/external-wall-norm.jpg");
	    wall.rotation.x = Math.PI/2;
	    return wall;
	}

	return front;
}


function createMesh (geometry,image,bump) {
	if(bump)
		material = mkTextureMaterialBump(image,bump);	
	else
		material = mkTextureMaterial(image);
	var mesh = new THREE.Mesh(geometry,material);
	return mesh;	
}

function mkTextureMaterial(image) {
	
	var texture = THREE.ImageUtils.loadTexture("textures/" + image);
	var material = new THREE.MeshPhongMaterial({
	map: texture,
	})
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	return material;
}

function mkTextureMaterialBump(image,bump) {
	
	var texture = THREE.ImageUtils.loadTexture("textures/" + image);
	var material = new THREE.MeshPhongMaterial({
	map: texture,
	})
	var normal = THREE.ImageUtils.loadTexture("textures/"+bump);
    material.normalMap = normal;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
	return material;
}
