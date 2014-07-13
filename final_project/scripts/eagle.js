var pivotEagleMaterial = new THREE.MeshPhongMaterial({ 
            transparent: true,
            opacity: 0.0,
            metal: true,
            side: THREE.DoubleSide
});
var pivotEagle = new THREE.Mesh(new THREE.SphereGeometry(.5, 8, 8), pivotEagleMaterial);
pivotEagle.position.set(.2,0,2);

var eagleObj = 'models/eagle/eagle.obj';
var eagleMtl = 'models/eagle/eagle.mtl';
var eagle = importObjMtl(eagleObj,eagleMtl);
eagle.scale.set(1.06, 1.06, 1.06);
eagle.rotation.x = Math.PI / 2;
pivotEagle.add(eagle);

toIntersect.push(pivotEagle);
apartment.add(pivotEagle);
pivotEagle.interact = function () {
	initAnimator();
    animator.start();
}

var animator = null;
var duration = 10; // sec
var loopAnimation = false;

function initAnimator() {
animator = new KF.KeyFrameAnimator();
	animator.init({ 
		interps:
		[
		  {	 
		    keys:[0, .2, .8, 1], 
		    values:[
		      { z : 0, x: 0},
		      { z : Math.PI, x: 0},
		      { z : Math.PI, x: 0  },
		      { z : Math.PI , x : 0  },
		      { z : Math.PI , x: 0 }
		    ],
		    target: pivotEagle.rotation
		  },
		  { 
		    keys:[0,.1,.2,.3, .8, 1], 
		    values:[
		      { x:1,y:-1.5,z : 2 },
		      { x:2,y:-2,z : 4 },
		      { x:3,y:3,z : 6 },
		      { x:9,y:4,z : 9 },
		      { x:18,y:16,z : 18 },
		      { x:27,y:62,z : 27}
		    ],
		    target: pivotEagle.position
		  },
		],
		loop: loopAnimation,
		duration: duration * 1000,
		easing: TWEEN.Easing.Linear.None
	});
};


