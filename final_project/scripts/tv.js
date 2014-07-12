	
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
	var tvScreenGeometry = new THREE.PlaneGeometry(1.4, 0.9);
	var tvScreen = new THREE.Mesh(tvScreenGeometry, video_material);
	tvScreen.position.set(19.9, 17, 1.8);
	tvScreen.rotation.set(Math.PI / 2, -Math.PI/2, 0);
	tvScreen.visible = false;
	tvScreen.isOn = false;
	tvScreen.interact = function() {
		if (this.isOn) {
			video.pause();
			tvScreen.visible = false;
			//tvScreen.children[0].intensity = 0;
			this.isOn = false;
		} else {
			tvScreen.visible = true;
			video.play();
			//tvScreen.children[0].intensity = 4;
			this.isOn = true;
		}
	}
	toIntersect.push(tvScreen);
	apartment.add(tvScreen);
}
