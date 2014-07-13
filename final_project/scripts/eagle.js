var eagleObj = 'models/eagle/eagle.obj';
var eagleMtl = 'models/eagle/eagle.mtl';
var eagle = importObjMtl(eagleObj,eagleMtl);
eagle.scale.set(1.03, 1.03, 1.03);
eagle.rotation.x = Math.PI / 2;
eagle.position.set(0,0,1.8);
toIntersect.push(eagle);
apartment.add(eagle);
eagle.interact = function () {
	new TWEEN.Tween(this.position)
        .to({x:40, y: Math.PI, z:30},400000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
}