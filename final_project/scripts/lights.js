      var lampShadeMaterial = new THREE.MeshPhongMaterial({ color: 0xB0C4DE , shading: THREE.SmoothShading, shininess: 30, metal: false, side: THREE.DoubleSide});
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
      dir2.position.set(-30, -70, 10);
      dir2.intensity = 0.7;
      apartment.add(dir2);

      var dir2Helper = new THREE.DirectionalLightHelper(dir2,3);
      scene.add(dir2Helper)

      //Bathroom Light
      var light1 = mk_lamp_ceiling(0.3, 10);
      apartment.add(light1);
      light1.position.set(16,32.6,3);
      

      /*
      //Corridor Light
      */
      var light2 = mk_lamp_ceiling(0.3, 10);
      apartment.add(light2);
      light2.position.set(6.3,32.6,3)

      /*
      //Mainroom Light
      */
      var light3 = mk_lamp_ceiling(0.3, 30);
      apartment.add(light3);
      light3.position.set(10.2,16,3)

      /*
      //Balcony Light
      */
      var light4 = mk_lamp_ceiling(0.3, 10);
      apartment.add(light4);
      light4.position.set(6,3,3)




}

function mk_lamp_ceiling(radius_lampShade, distance){
            
            var lampShadeGeometry = new THREE.SphereGeometry(radius_lampShade, 8, 8, 0, Math.PI, 0, Math.PI);
                
            // lampShadeMaterial.side = THREE.DoubleSide;
            var lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
            lampShade.scale.z=0.5;

            //   var spotLight = new THREE.SpotLight(0xffffff);
            //   spotLight.angle=Math.PI/2;
            //   spotLight.intensity=0;
            //   lampShade.add(spotLight);
            // lampShade.spotLight=spotLight;

            var plight = new THREE.PointLight( 0xFFFFFF, 0, distance );
            lampShade.add(plight);
            lampShade.pointLight =plight;
            // plight.intensity=0;
            plight.position.set(0,0,-1);

            var t = new THREE.Object3D();
            lampShade.add(t);
            t.position.set(0,0,-6);
            lampShade.target = t;

            toIntersect.push(lampShade);
            lampShade.on=false;
      lampShade.interact=function(){
            if(!this.on){
                  this.pointLight.intensity=2;
                  // this.children[1].intensity=2;
                  this.on=true;
            } else {
                  this.pointLight.intensity=0;
                  // this.children[1].intensity=0;
                  this.on=false;
            }
      }
      return lampShade;

}
