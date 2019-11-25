var growBackground = document.getElementById("growBackground");
var shrinkBackground = document.getElementById("shrinkBackground");
var shape = document.getElementById("shape");
var buttons = document.getElementsByTagName("button");
var liesButton = document.getElementsByClassName("liesButton")[0];
var codeButton = document.getElementsByClassName("codeButton")[0];
var liesMove = "100,65 100,100 65,100";
var codeMove = "35,0.000001 100,0.000001 100,100 0.000001,100 0.000001,35";
var liesLinks = document.getElementById("liesLinksHide");
var codeLinks = document.getElementById("codeLinksHide");
var htmlEl = document.getElementsByTagName("html")[0];
var codeCloser = document.getElementsByClassName("codeCloser")[0];
var liesCloser = document.getElementsByClassName("liesCloser")[0];
/*function liesDrawer() {
	var justClicked = document.getElementsByClassName("liesButton");
	if (justClicked[0].id == "topSpace") {
	justClicked[0].removeAttribute("id");
} else {
	justClicked[0].setAttribute("id","topSpace");
}

}*/

/*function drawer(buttonClass) {
	var justClicked = document.getElementsByClassName(buttonClass);
	var shapeToMove = document.getElementsByClassName("codeShapePoly");
	if (justClicked[0].id === "topSpace") {
		justClicked[0].removeAttribute("id");
	} else {
	justClicked[0].setAttribute("id","topSpace");
}
	/*if (justClicked[0].classList == "liesButton") {
	console.log(shapeToMove);
	shapeToMove[0].setAttribute("points", "50,0 100,0 100,100 50,100");
	console.log(shapeToMove);
}*/

	/*
	if (shapeToMove[0].id == "codeShapeLiesDrawer") {
		shapeToMove[0].removeAttribute("id");
	} else {
	shapeToMove[0].setAttribute("id","codeShapeLiesDrawer");
	}
} else {
		if (shapeToMove[0].id == "codeShapeCodeDrawer") {
		shapeToMove[0].removeAttribute("id");
		} else {
		shapeToMove[0].setAttribute("id","codeShapeCodeDrawer");
	}*/




/*console.log("button's id is " + justClicked[0].id);
//console.log("shape's id is " + shapeToMove[0].id)
}*/



function lies(){
	Velocity(growBackground, {
		points: ["100,100 100,100 100,100 100,100 100,100"]
	},{
		duration: 0
	});
	Velocity(shrinkBackground, {
		points: [liesMove]
	},{
		duration: 500,
		easing: "ease-in",
	});
	liesButton.setAttribute("id","liesClicked");
	codeButton.setAttribute("id","codeHide");
	liesLinks.setAttribute("id","liesLinksShow");
	htmlEl.style.overflow = "auto";
	liesCloser.setAttribute("id","closerShow");
}

function code(){
	Velocity(shrinkBackground, {
		points: ["100,100 100,100 100,100"]
	},{
		duration: 0
	});
	Velocity(growBackground, {
		points: [codeMove]
	},{
		duration: 500,
		easing: "ease-in",
	});
	liesButton.setAttribute("id","liesHide");
	codeButton.setAttribute("id","codeClicked");
	codeLinks.setAttribute("id","codeLinksShow");
	htmlEl.style.overflow = "auto";
	codeCloser.setAttribute("id","closerShow");
}

function revert(){
	console.log("fired");
	liesButton.removeAttribute("id");
	codeButton.removeAttribute("id");
	document.getElementById("liesLinksShow").removeAttribute("id");
	document.getElementById("codeLinksShow").removeAttribute("id");
	Velocity(shrinkBackground, {
		points: ["100,0 100,100 0,100"]
	},{
		duration: 500
	});
	Velocity(growBackground, {
		points: [codeMove]
	},{
		duration: 500,
		easing: "100,0 100,0 100,100 0,100 0,100",
	});

}
