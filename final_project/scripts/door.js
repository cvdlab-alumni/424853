function mkDoor (height, width, depth) {
    var doorGeometry = new THREE.BoxGeometry(width,height,depth);
    var doorTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/door.jpg' );
    doorTexture.wrapS = THREE.RepeatWrapping; 
    doorTexture.wrapT = THREE.RepeatWrapping; 
    //floorTexture.repeat.set(.08, .1 );
    //doorTexture.repeat.set(.1,.1);
    
    var doorMaterial = new THREE.MeshBasicMaterial( { map: doorTexture, side: THREE.DoubleSide } );
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    var door = new THREE.Mesh(doorGeometry, doorMaterial);
    // cube.castShadow = true;
    // position the cube
    //door.position.set(1,2.5,0);
    perno = new THREE.Object3D();
    perno.add(door);

    door.interact = function () {
        //apre la porta
        if(door.parent.rotation.y === 0){
            var translatedoor  = new TWEEN.Tween(door.parent.rotation)
            .to({x:0,  y:0, z: Math.PI/2},4000)
            .easing(TWEEN.Easing.Bounce.Out)
            .start();
        }
        //chiusura porta
        else
        {
         var translatedoor  = new TWEEN.Tween(door.parent.rotation)
            .to({x:0, y: 0, z:0},4000)
            .easing(TWEEN.Easing.Bounce.Out)
            .start();   
        }
       //door.parent.rotation.y= Math.sin();
    }

    return perno;
}