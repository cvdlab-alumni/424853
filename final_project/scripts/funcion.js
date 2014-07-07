function onDocumentMouseDown(event) {
  event.preventDefault();
  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
    // var vector = new THREE.Vector3(0, 0, 2);
    // projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(controls.getObject().position, controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
  } else {
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(camera.position,
      vector.sub(camera.position).normalize());

  }
