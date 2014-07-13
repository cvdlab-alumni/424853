function importObjMtl(obj, mtl, doubleSide) {
	var pivot = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.addEventListener('load', function(event) {
		var object = event.content;
		if (doubleSide) {
			object.traverse(function(child) {
				if (child instanceof THREE.Mesh) {
					child.material.side = THREE.DoubleSide;
				}
			});
		}
		pivot.add(object);
	});
	loader.load(obj,mtl);
	return pivot;
}

function importObj (obj) {
	var pivot = new THREE.Object3D(); 
  	loader = new THREE.OBJLoader();
    loader.load(obj, function (obj) {
    	global_o = obj;
        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0x990000, metal: true })
        ];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        pivot.add(mesh);
    });
    return pivot;
}

function putModels (apartment) {
	
	//Sofa
	var sofaObj = 'models/sofa/cornerSofa/cornerSofa.obj';
	var sofaMtl = 'models/sofa/cornerSofa/cornerSofa.mtl';
	sofa = importObjMtl(sofaObj,sofaMtl);
	sofa.scale.set(0.012, 0.012, 0.012);
	sofa.rotation.x = Math.PI / 2;
	sofa.rotation.y = Math.PI / 2;
	sofa.position.set(14.2, 14.5, .4);
	apartment.add(sofa);
	
	var tv = importObjMtl('models/tv/contemp/contemp_living_room.obj', 'models/tv/contemp/contemp_living_room.mtl');
	tv.scale.set(0.015, 0.013, 0.013);
	tv.rotation.x = Math.PI / 2;
	tv.rotation.y = -Math.PI / 2;
	tv.position.set(19.9, 17,.3);
	apartment.add(tv);
	mkTvScreen (tv);
	
	
	//desk 
	var deskObj = 'models/desk/ModernDeskOBJ.obj';
	var deskMtl = 'models/desk/ModernDeskOBJ.mtl';

	var desk = importObjMtl(deskObj,deskMtl,true);
	desk.scale.set(.03, 0.025, 0.06);
	desk.rotation.x = Math.PI / 2;
	desk.position.set(19.4,27,.3);
	apartment.add(desk);

	var chairObj = 'models/chair/chair.obj';
	var chairMtl = 'models/chair/chair.mtl';

	var chair= importObjMtl(chairObj,chairMtl,false);
	chair.scale.set(1.03, 1.06,1.03);
	chair.rotation.x = Math.PI / 2;
	chair.rotation.y = Math.PI / 2;
	chair.position.set(19.8,26,.3);
	apartment.add(chair);

	
	//Table
	
	var tableObj = 'models/coffeeTable/coffeeTable.obj';
	var tableMtl = 'models/coffeeTable/coffeeTable.mtl';
	var table = importObjMtl(tableObj, tableMtl);
	table.scale.set(0.015, 0.015, 0.015);
	table.rotation.x = Math.PI / 2;
	table.rotation.y = Math.PI / 2;
	table.position.set(17, 17, .3)
	apartment.add(table);


	//Bed
	var bed = importObjMtl('models/bed/lit.obj', 'models/bed/lit.mtl');
	bed.scale.set(.02, .02, .02);
	bed.rotation.x = Math.PI/2;
	bed.position.set(2, 23.5, .5);
	apartment.add(bed);

	//armoireLotus
	var armoireLotus = importObjMtl('models/armoireLotus/armoireLotus.obj', 'models/armoireLotus/armoireLotus.mtl');
	armoireLotus.scale.set(.02, .01, .02);
	armoireLotus.rotation.x = Math.PI/2;
	armoireLotus.rotation.y = Math.PI;
	armoireLotus.position.set(.5, 18, 1.5);
	apartment.add(armoireLotus);




	var kitchen = importObjMtl('models/kitchen/kitchen.obj', 'models/kitchen/kitchen.mtl', true);
	kitchen.scale.set(.05, .018, .018);
	kitchen.rotation.x = Math.PI/2;
	kitchen.rotation.y = Math.PI;
	kitchen.position.set(16, 5.5, .3);
	apartment.add(kitchen);
	//Plane sink
	var planeKitchen = importObjMtl('models/kitchen/lavello/lavello.obj','models/kitchen/lavello/lavello.mtl');
	planeKitchen.rotation.set(Math.PI/2,Math.PI,0);
	planeKitchen.scale.set(0.024,0.018,0.018);
	planeKitchen.position.set(16.1,8.01,0.3);
	apartment.add(planeKitchen);

	var frizer = importObjMtl('models/kitchen/frigo/frigo.obj','models/kitchen/frigo/frigo.mtl');
	frizer.scale.set(.018,.016,.018);
	frizer.rotation.set(Math.PI/2,Math.PI,0);
	frizer.position.set(22.5,3,.3);
	apartment.add(frizer);
	putObjetcBalcony(apartment);
	putObjetcBathroom (apartment);
	


}