function putLights (scene,apartment) {

	
		
	var dir1 = new THREE.DirectionalLight(0xffffff);
      // dir1.position.set(50, 100, -50);
      dir1.position.set(25, 70, -50);
      dir1.intensity = 0.7; 
      scene.add(dir1);

      var dir1Helper = new THREE.DirectionalLightHelper(dir1,3);
      scene.add(dir1Helper)

      var dir2 = new THREE.DirectionalLight(0xffffff);
      // dir2.position.set(-50, 100, 50);
      dir2.position.set(-30, 70, 10);
      dir2.intensity = 0.7;
      scene.add(dir2);

      var dir2Helper = new THREE.DirectionalLightHelper(dir2,3);
      scene.add(dir2Helper)

      



}