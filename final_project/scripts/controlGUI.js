var guiControls = new function() {    
	this.startFP = startFP;
	this.roof = false;
}
var gui = new dat.GUI();
gui.add(guiControls, "startFP");
gui.add(guiControls,"roof").onChange(function(e) {
        roof.visible = e;
    })





