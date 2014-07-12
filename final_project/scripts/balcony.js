function putObjetcBalcony (apartment) {
	/*CROW*/
	var crowObj = 'models/balcony/Crow/CROW.OBJ';
	var crowMtl = 'models/balcony/Crow/CROW.MTL';
	var crow = importObjMtl(crowObj,crowMtl,true);
	crow.scale.set(1.03, 1.03, 1.03);
	crow.rotation.x = Math.PI / 2;
	crow.position.set(0,0,1.8);
	apartment.add(crow);

	/*PLANTS*/
	var plantsObj = 'models/balcony/Plants/plants.obj';
	var plantsMtl = 'models/balcony/Plants/plants.mtl';
	var plants = importObjMtl(plantsObj,plantsMtl,true);
	plants.scale.set(.02, .02, .02);
	plants.rotation.x = Math.PI / 2;
	plants.position.set(.8,5.7,.3);
	apartment.add(plants);

}