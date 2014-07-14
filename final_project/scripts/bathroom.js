function putObjetcBathroom (apartment) {
	
	var bathroomFurnitureObj = 'models/bathroom/bathroomFurniture/bathroomFurniture.obj';
	var bathroomFurnitureMtl = 'models/bathroom/bathroomFurniture/bathroomFurniture.mtl';
	var bathroomFurniture = importObjMtl(bathroomFurnitureObj,bathroomFurnitureMtl);
	bathroomFurniture.scale.set(.025, .023, .025);
	bathroomFurniture.rotation.x = Math.PI / 2;
	bathroomFurniture.rotation.y = Math.PI;
	bathroomFurniture.position.set(18.5,27.8,.07);
	apartment.add(bathroomFurniture);

	/*BIDET*/
	
	var bidetObj = 'models/bathroom/bidet.obj';
	var bidetMtl = 'models/bathroom/bidet.mtl';
	var bidet = importObjMtl(bidetObj,bidetMtl);
	bidet.scale.set(.015, .015, .015);
	bidet.rotation.x = Math.PI / 2;
	bidet.rotation.y = -Math.PI / 2;
	bidet.position.set(19.98,32,.3);
	apartment.add(bidet);

	var toiletObj = 'models/bathroom/toilet.obj';
	var toiletMtl = 'models/bathroom/toilet.mtl';
	var toilet = importObjMtl(toiletObj,toiletMtl);
	toilet.scale.set(.015, .015, .015);
	toilet.rotation.x = Math.PI / 2;
	toilet.rotation.y = -Math.PI / 2;
	toilet.position.set(19.98,31,.3);
	apartment.add(toilet);

	var showerObj = 'models/bathroom/shower.obj';
	var showerMtl = 'models/bathroom/shower.mtl';
	var shower = importObjMtl(showerObj,showerMtl);
	shower.scale.set(.02, .013, .02);
	shower.rotation.x = Math.PI / 2;
	shower.rotation.y = Math.PI / 2;
	shower.position.set(20.35,28.73,.3);
	apartment.add(shower);
}