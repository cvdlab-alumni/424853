var lampMaterial = new THREE.MeshPhongMaterial({ shininess: 50,
            specular: '#B5FFFA',
            transparent: true,
            opacity: 0.0,
            metal: true,
            side: THREE.DoubleSide
});

function putLights (scene,apartment) {

	
		
	var dirLight1 = new THREE.DirectionalLight(0xffffff);
     
      dirLight1.position.set(25, 70, 50);
      dirLight1.intensity = 0.7; 
      apartment.add(dirLight1);
     
      var dirLight2 = new THREE.DirectionalLight(0xffffff);
      dirLight2.position.set(-30, -70, 10);
      dirLight2.intensity = 0.7;
      apartment.add(dirLight2);


      //Bathroom Light
      var light1 = mkLamp(10);
      apartment.add(light1);
      light1.position.set(16,32.6,3);
      

      /*
      //Corridor Light
      */
      var light2 = mkLamp(10);
      apartment.add(light2);
      light2.position.set(6.3,32.6,3)

      /*
      //Mainroom Light
      */
      var light3 = mkLamp(30);
      apartment.add(light3);
      light3.position.set(10.2,16,3)

      /*
      //Balcony Light
      */
      var light4 = mkLamp(10);
      apartment.add(light4);
      light4.position.set(6,3,3)




}

function mkLamp(distance){
      
      var pendantLampObj = 'models/pendantLamp.obj';
      var pendantLamp = importObj(pendantLampObj);
      pendantLamp.scale.set(.5,.7,.5);
      pendantLamp.rotation.set(Math.PI/2,Math.PI/2,0);

      var lampGeometry = new THREE.SphereGeometry(.2, 8, 8);
          
      var lamp = new THREE.Mesh(lampGeometry, lampMaterial);

      var plight = new THREE.PointLight( 0xFFFFFF, 0, distance );
      lamp.add(plight);
      lamp.pointLight =plight;
      plight.position.set(0,0,-1);
      
      toIntersect.push(lamp);
      lamp.on=false;
      lamp.interact=function(){
            if(!this.on){
                  this.pointLight.intensity=.8;
                  this.on=true;
            } else {
                  this.pointLight.intensity=0;
                  this.on=false;
            }
      }
      
      pendantLamp.add(lamp);
      lamp.position.y = -.6;
      return pendantLamp;

}
