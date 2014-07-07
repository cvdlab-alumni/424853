function render() {
    stats.update();
    TWEEN.update();
    //trackballControls.update();
    webGLRenderer.render(scene, camera);
}

function initStats() {
  	var stats = new Stats();
  	stats.setMode(0); // 0: fps, 1: ms
  	$('body').append(stats.domElement);
	return stats;
}

