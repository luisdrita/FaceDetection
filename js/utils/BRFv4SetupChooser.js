(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	var labels = [];
	for (var key in urlMap) { labels.push(key); } // Fill in the labels.

		brfv4Example.init(webcam);

	if(!brfv4Example.gui.setupChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.setupChooser = QuickSettings.create(
			2, 115, "Setup Chooser", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addDropDown("_setup", labels, onSetupChosen)
			.hideTitle("_setup").hideTitle("Switch between setups");
	}
})();