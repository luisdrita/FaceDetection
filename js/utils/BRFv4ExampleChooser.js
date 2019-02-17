(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	var urlMap 	= {

		"Face detection - detect in whole image":		"js/examples/face_detection/detect_in_whole_image.js",
		"Face detection - detect smaller faces":		"js/examples/face_detection/detect_smaller_faces.js",

		"Face tracking - smile detection":		"js/examples/face_tracking/smile_detection.js",
		"Face tracking - yawn detection":		"js/examples/face_tracking/yawn_detection.js",
		"Face tracking - color libs":			"js/examples/face_tracking/color_libs.js",

		"Face tracking - blink detection":			"js/examples/face_tracking/blink_detection.js",
		"Face tracking - ThreeJS example":			"js/examples/face_tracking/ThreeJS_example.js",
		"Face tracking - face swap (two faces)":		"js/examples/face_tracking/face_swap_two_faces.js"
	};
	var labels = [];
	for (var key in urlMap) { labels.push(key); } // Fill in the labels.

	function onExampleLoaded() {
		brfv4Example.reinit();
	}

	var _isFirstSelect = true;
	function onExampleChosen(data) {

		if(_isFirstSelect) return;

		var url = urlMap[data.value];

		if(url) {
			if(typeof url === "string") {
				brfv4Example.loader.loadExample([url], onExampleLoaded);
			} else {
				brfv4Example.loader.loadExample(url, onExampleLoaded);
			}
		} else {
			if(data.index >= 0) {
				brfv4Example.gui.exampleChooser.setValuesFromJSON({ "_example": data.index + 1});
			}
		}
	}

	if(!brfv4Example.gui.exampleChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.exampleChooser = QuickSettings.create(
			2, 2, "Example Chooser", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addDropDown("_example", labels, onExampleChosen)
			.hideTitle("_example")
			.setValuesFromJSON({ "_example": 6}); // "basic - face tracking - track single face"

		_isFirstSelect = false;
	}
})();