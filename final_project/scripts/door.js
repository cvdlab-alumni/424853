var ext_door_texture_material = mkDoorMaterial("door.jpg", "door-bump.jpg");
var ins_door_material = mkDoorMaterial("doorIn.jpg", "doorIn-bump.jpg");

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
	
}

function mk_door(width, height, depth, reverse){
	if(typeof(reverse)==='undefined') reverse = 0;
	var portGeometry = new THREE.BoxGeometry(width, depth, height);
	if(depth===0.15)
		var port = new THREE.Mesh(portGeometry, ext_door_texture_material);
	else
		var port = new THREE.Mesh(portGeometry, ins_door_material);
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	door.add(hook);
	hook.add(port);
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

function mk_doubleDoor (width, height, depth) {
	var doorBalcony = new THREE.Object3D();
	var door1 = mk_doorBalcony(width/2,height, depth,1);
	var door2 = mk_doorBalcony(width/2,height, depth,-1);
	door2.position.x = width/2;
	doorBalcony.add(door1);
	doorBalcony.add(door2);
	return doorBalcony;
}
function mk_doorBalcony (width, height, depth, reverse) {
	var texture = 'alluminio.jpg';
	var door = new THREE.Object3D();
	var doorMaterial = mkDoorMaterial(texture);
	
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
		return material;
	}
}

var doorOpenTween;
var doorCloseTween;

