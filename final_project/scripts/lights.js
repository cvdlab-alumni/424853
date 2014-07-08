function putLights (scene,apartment) {

	
		
	var dir1 = new THREE.DirectionalLight(0xffffff);
      // dir1.position.set(50, 100, -50);
      dir1.position.set(25, 70, 50);
      dir1.intensity = 0.7; 
      apartment.add(dir1);

      var dir1Helper = new THREE.DirectionalLightHelper(dir1,3);
      scene.add(dir1Helper)

      var dir2 = new THREE.DirectionalLight(0xffffff);
      // dir2.position.set(-50, 100, 50);
      dir2.position.set(-30, 70, 10);
      dir2.intensity = 0.7;
      apartment.add(dir2);

      var dir2Helper = new THREE.DirectionalLightHelper(dir2,3);
      scene.add(dir2Helper)

      //Bathroom Light
      var pointColor = "#ffffff";
       pointLight = new THREE.PointLight(pointColor);
      pointLight.distance = 10;

      pointLight.position.set(16,32.6,3);
      

      apartment.add(pointLight);

      //Corridor Light
      var pointColor = "#ffffff";
       pointLight1 = new THREE.PointLight(pointColor);
      pointLight1.distance = 10;

      pointLight1.position.set(6.3,32.6,3);
      

      apartment.add(pointLight1);
      

}