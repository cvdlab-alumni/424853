var stats = initStats();


function onDocumentMouseDown(event) {
      /*event.preventDefault();

        // map viewport coordinates in ([-1,1], [-1,1], 0.5)
        var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        projector.unprojectVector(vector, camera);

        var raycaster = new THREE.Raycaster(camera.position, 
          vector.sub(camera.position).normalize());

        var intersects = raycaster.intersectObjects(toIntersect);

        if (intersects.length > 0) {
          intersects[ 0 ].object.interact && intersects[ 0 ].object.interact();
          
        }*/
        event.preventDefault();
  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
    var vector = new THREE.Vector3(0, 0, 0.5);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(vector,
      controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
  } else {
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(camera.position,
      vector.sub(camera.position).normalize());

  }
  var intersects = raycaster.intersectObjects(toIntersect);
  if (intersects.length > 0) {
    intersects[0].object.interact && intersects[0].object.interact();
  }
}

function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}
function render() {
  stats.update();
  trackballControls.update();
  TWEEN.update();
  // first person controls
  if (FPenabled === true) {
    computeFPControls();
  }
  webGLRenderer.render(scene, camera);
  // render using requestAnimationFrame
  requestAnimationFrame(render);
}