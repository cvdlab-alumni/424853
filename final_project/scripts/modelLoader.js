function importObjMtl(obj, mtl, doubleSide, transformObject) {
	var container = new THREE.Object3D();
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
		if (transformObject) {
			transformObject(object);
		}
		container.add(object);
	});
	loader.load(obj,mtl);
	return container;
}

function importObj (obj) {
	var container = new THREE.Object3D(); 
  	loader = new THREE.OBJLoader();
    loader.load(obj, function (obj) {
    	global_o = obj;
        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0x990000, metal: true })
        ];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        container.add(mesh);
    });
    return container;
}

function putModels (apartment) {
	
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

		

	//Sofa
	var sofaObj = 'models/sofa/sofa.obj';
	var sofaMtl = 'models/sofa/sofa.mtl';
	sofa = importObjMtl(sofaObj,sofaMtl);
	sofa.scale.set(0.016, 0.016, 0.016);
	sofa.rotation.x = Math.PI / 2;
	sofa.position.set(17.2, 20, 1);
	apartment.add(sofa);


	sofa2 = importObjMtl(sofaObj,sofaMtl);
	sofa2.scale.set(0.016, 0.016, 0.016);
	sofa2.rotation.x = Math.PI / 2;
	sofa2.rotation.y = Math.PI;
	sofa2.position.set(17, 14, 1);
	apartment.add(sofa2);


	//Sofa white
	var sofaObj3 = 'models/sofa/clear_sofa.obj';
	var sofaMtl3 = 'models/sofa/clear_sofa.mtl';
	var sofa3 = importObjMtl(sofaObj3,sofaMtl3);
	sofa3.scale.set(0.5, 0.5, 0.5);
	sofa3.rotation.x = Math.PI / 2;
	sofa3.rotation.y = Math.PI / 2;
	sofa3.position.set(14, 17, .5);
	apartment.add(sofa3);

	//Table
	
	var tableObj = 'models/table/table.obj';
	var tableMtl = 'models/table/table.mtl';
	var table = importObjMtl(tableObj, tableMtl);
	table.scale.set(0.02, 0.01, 0.015);
	table.rotation.x = Math.PI / 2;
	table.rotation.y = Math.PI / 2;
	table.position.set(17, 17, .3)
	apartment.add(table);

	
	var tvShelf = importObjMtl('models/tv/tvShelf.obj', 'models/tv/tvShelf.mtl');
	tvShelf.scale.set(0.02, 0.02, 0.02);
	tvShelf.rotation.x = Math.PI / 2;
	tvShelf.rotation.y = -Math.PI / 2;
	tvShelf.position.set(19.9, 17,1);
	apartment.add(tvShelf);

	//Bed
	var bed = importObjMtl('models/bed/bed1.obj', 'models/bed/bed1.mtl', true);
	bed.scale.set(1.5, 1.5, 1.5);
	bed.rotation.x = Math.PI/2;
	bed.position.set(2, 27, .3);
	apartment.add(bed);

	var kitchen = importObjMtl('models/kitchen/kitchen.obj', 'models/kitchen/kitchen.mtl', true);
	kitchen.scale.set(.05, .018, .018);
	kitchen.rotation.x = Math.PI/2;
	kitchen.rotation.y = Math.PI;
	kitchen.position.set(16, 5.5, .3);
	apartment.add(kitchen);
	//Piano cucina doppio
	var planeKitchen = importObjMtl('models/kitchen/plane/plane.obj','models/kitchen/plane/plane.mtl');
	planeKitchen.rotation.set(Math.PI/2,Math.PI,0);
	planeKitchen.scale.set(0.024,0.018,0.018);
	planeKitchen.position.set(20.1,8.01,0.3);
	apartment.add(planeKitchen);

	var frizer = importObj('models/kitchen/frizer.obj');
	frizer.scale.set(.037,.035,.035);
	frizer.rotation.set(Math.PI/2,-Math.PI/2,0);
	frizer.position.set(13.5,5,.3);
	apartment.add(frizer);
	//TV
	var tv = importObjMtl('models/tv.obj', 'models/tv.mtl', true);
	tv.scale.set(0.22, 0.2, 0.22);
	tv.rotation.set(Math.PI / 2, -Math.PI/2, 0);
	tv.position.set(20, 17, 1);
	mkTvScreen (tv);
	apartment.add(tv);
	
	putObjetcBalcony(apartment);
	putObjetcBathroom (apartment);


}