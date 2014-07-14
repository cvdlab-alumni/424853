var pivotMaterial = new THREE.MeshPhongMaterial({ 
            transparent: true,
            opacity: 0.0,
            metal: true,
            side: THREE.DoubleSide
});
var pivot = new THREE.Mesh(new THREE.SphereGeometry(.5, 8, 8), pivotMaterial);
pivot.position.set(-2,-2,.2);

var ballObj = 'models/ballonFoot/ballonFoot.obj';
var ballMtl = 'models/ballonFoot/ballonFoot.mtl';
var ball = importObjMtl(ballObj,ballMtl);
ball.scale.set(.03, .03, .03);
pivot.add(ball);

toIntersect.push(pivot);
apartment.add(pivot);
var shotted = false;
pivot.interact = function () {
	if(shotted){
		shotted= false;
		initAnimatorSecond();
	    animator.start();
	}
	else{
		shotted = true;
		initAnimatorFirst();
		animator.start();
	}
}

var animator = null;
var duration = 2; // sec
var loopAnimation = false;

function initAnimatorFirst() {
animator = new KF.KeyFrameAnimator();
	animator.init({ 
		interps:
		[
		  { 
		    keys:[0,.2,.4,.6, .8, 1], 
		    values:[
		      { x:3,z : 2 },
		      { x:5,z : .1 },
		      { x:6,z : 1.5 },
		      { x:7,z : .1 },
		      { x:8,z : 1 },
		      { x:9,z : .2 },
		    ],
		    target: pivot.position
		  },
		],
		loop: loopAnimation,
		duration: duration * 1000,
		easing: TWEEN.Easing.Linear.None
	});
};

function initAnimatorSecond() {
	animator = new KF.KeyFrameAnimator();
	animator.init({ 
		interps:
		[
		  { 
		    keys:[0,.2,.4,.6, .8, 1], 
		    values:[
		    	{ x:9,z : 2 },
		      	{ x:7,z : .1 },
				{ x:6,z : 1.5 },
				{ x:5,z : .1 },
				{ x:4,z : 1 },
				{ x:3,z : .2 },
		    ],
		    target: pivot.position
		  },
		],
		loop: loopAnimation,
		duration: duration * 1000,
		easing: TWEEN.Easing.Linear.None
	});
};


