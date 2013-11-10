/*
 *  This script loades files that are inside of Files object.
 *  Files can be added manually.
 */

var Files = {

	script: ["javascript/Anatomy.js", "javascript/BuildPage.js"]

};

window.onload = function() {

	for (var type in Files) {
		if (type == "script") {
			loadScripts(Files[type]);
		}
	}

}

function loadScripts(scripts) {

	var filesLoaded = 0;
	var numOfFiles = scripts.length;
	for (var i = 0; i < numOfFiles; i++) {
		var script = document.createElement("script");
		script.setAttribute("src", scripts[i]);
		script.onload = function() {
			filesLoaded++;
			if (filesLoaded == numOfFiles) {
				console.log("Scripts are loaded!");
				BuildPage();
			}
		}
		document.body.appendChild(script);
	}

}