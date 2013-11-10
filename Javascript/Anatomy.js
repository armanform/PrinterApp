/*
 *  This class holds and calculates the anatomical structure
 *  of the page.
 */

function Anatomy() {

	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.browser = navigator;
	this.frame = {
		header: "",
		footer: "",
		left: "",
		right: "",
		torso: ""
	};

}