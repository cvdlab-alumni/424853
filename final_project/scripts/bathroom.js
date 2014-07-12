function putObjetcBathroom (apartment) {
	/*BIDET*/
	
	var cabinetObj = 'models/bathroom/mirror_cabinet.obj';
	var cabinetMtl = 'models/bathroom/mirror_cabinet.mtl';
	var cabinet = importObjMtl(cabinetObj,cabinetMtl);
	cabinet.scale.set(.015, .015, .015);
	cabinet.rotation.x = Math.PI / 2;
	cabinet.rotation.y = Math.PI;
	cabinet.position.set(19.98,28.42,-.043);
	apartment.add(cabinet);

	var sinkObj = 'models/bathroom/sink.obj';
	var sinkMtl = 'models/bathroom/sink.mtl';
	var sink = importObjMtl(sinkObj,sinkMtl);
	sink.scale.set(.015, .015, .015);
	sink.rotation.x = Math.PI / 2;
	sink.rotation.y = Math.PI;
	sink.position.set(19.98,28.42,.3);
	apartment.add(sink);

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