	
var texture;
var $video = $('#video');
var video = $video[0];
video.pause();
texture = new THREE.Texture(video);
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;
texture.generateMipmaps = false;

var video_material = new THREE.MeshBasicMaterial({
	map: texture,
	shininess: 100
});

function mkTvScreen (tv) {
	var tvScreenGeometry = new THREE.PlaneGeometry(1.3, 0.7);
	var tvScreen = new THREE.Mesh(tvScreenGeometry, video_material);
	tvScreen.position.set(19.56, 17, 1.44);
	tvScreen.rotation.set(Math.PI / 2, -Math.PI/2, 0);
	tvScreen.visible = false;
	tvScreen.isOn = false;
	tvScreen.interact = function() {
		if (this.isOn) {
			video.pause();
			tvScreen.visible = false;
			this.isOn = false;
		} else {
			tvScreen.visible = true;
			video.play();
			this.isOn = true;
		}
	}
	toIntersect.push(tvScreen);
	apartment.add(tvScreen);
}
