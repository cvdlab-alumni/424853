var external_door_material = mkDoorMaterial("door.jpg", "door-bump.jpg");
var internal_door_material = mkDoorMaterial("doorIn.jpg", "doorIn-bump.jpg");

function mkDoors (apartment) {
	var doorInput = mk_door(1.3,2.4,.15,1);
	doorInput.position.set(9.5,37,.3+2.38/2);
	apartment.add(doorInput);

	var doorBathroom = mk_door(1.3,2.4,.1,1);
	doorBathroom.position.set(12.35,28.8,.3+2.38/2);
	doorBathroom.rotation.z = Math.PI/2;
	apartment.add(doorBathroom);

	var doorRoom = mk_door(1.3,2.4,.1,1);
	doorRoom.position.set(11,27.7,.3+2.38/2);
	apartment.add(doorRoom);	

	var doorBalcony = mk_doubleDoor();
	doorBalcony.position.set(8.8,6.5,.3);
	apartment.add(doorBalcony);
	
	
}

function mk_door(width, height, depth, reverse){
	if(typeof(reverse)==='undefined') reverse = 0;
	var portGeometry = new THREE.BoxGeometry(width, depth, height);
	if (width === 2)
		var port = mk_doorBalcony(width/2,height,depth,reverse);
	else 
		if(depth===0.15)
			var port = new THREE.Mesh(portGeometry, external_door_material);
		else
			var port = new THREE.Mesh(portGeometry, internal_door_material);
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	door.add(hook);
	hook.add(port);
	if(width===2)
		port.position.set(reverse*width/4,0,0)
	else
		port.position.set(width/2,0,0);
	toIntersect.push(port);
	port.open=false;
	port.interact=function(){
		if(!this.open){
			if (reverse===1){
				new TWEEN.Tween(this.parent.rotation)
				.to({z: -Math.PI/2},1000)
				.start();
			} else {
				new TWEEN.Tween(this.parent.rotation)
				.to({z: Math.PI/2},1000)
				.start();
			}
			
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	return door;
}

function mk_doubleDoor () {
	var doubleDoorBalcony = new THREE.Object3D();
	
	var doorBalconyRight = mk_door(2,2.4,.1,1);
	doorBalconyRight.position.set(0,0,2.4/2);
	doubleDoorBalcony.add(doorBalconyRight);

	var doorBalconyLeft = mk_door(2,2.4,.1,-1);
	
	doorBalconyLeft.position.set(2,0,2.4/2);
	doubleDoorBalcony.add(doorBalconyLeft);
	
	return doubleDoorBalcony;
}
function mk_doorBalcony (width, height, depth,reverse) {
	//larghezza porta 1m 
	var texture = 'alluminio.jpg';
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	
	var doorInt = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth));
	var doorIntBSP = new ThreeBSP(doorInt);

	var doorHole  = new THREE.Mesh(new THREE.BoxGeometry(.7, 1, depth));
	doorHole.position.set(0, .5,0);
	var doorHoleBSP = new ThreeBSP(doorHole);

	var doorBSP = doorIntBSP.subtract(doorHoleBSP);

 	var doorMaterial = mkDoorMaterial(texture);
 	var port = doorBSP.toMesh(doorMaterial);
	port.geometry.computeVertexNormals();
 	var glass = mk_glass(.7,1,.1);
 	port.add(glass);
 	toIntersect.push(glass);
 	glass.interact = function () {
 		this.parent.interact();
 	}
 	glass.position.set(0, .5,0);
 	port.rotation.x= Math.PI/2;
	return port;
}

function mkDoorMaterial(image, bump) {
	var texture = THREE.ImageUtils.loadTexture("textures/door/" + image);
	var material = new THREE.MeshPhongMaterial({
		map: texture,
		shininess: 5
	})
	if(bump){
		var normal = THREE.ImageUtils.loadTexture("textures/door/" + bump);
		material.normalMap = normal;
	}
	return material;
}

function mk_glass (width,height,depth) {
	var texture = THREE.ImageUtils.loadTexture("textures/glass.jpg");
	var glass_material = new THREE.MeshPhongMaterial({
		map: texture,
		shininess: 50,
		specular: '#B5FFFA',
		transparent: true,
		opacity: 0.4,
		metal: true
	});

	var glass = new THREE.Object3D();
	var glassGeometry = new THREE.BoxGeometry(width, height,depth);
	glass = new THREE.Mesh(glassGeometry,glass_material);
	return glass;
}




