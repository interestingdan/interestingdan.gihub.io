var growBackground = document.getElementsByClassName("growBackground")[0];
var shrinkBackground = document.getElementsByClassName("shrinkBackground")[0];
var liesLinks = document.getElementsByClassName("liesLinks")[0];
var codeLinks = document.getElementsByClassName("codeLinks")[0];
var liesButton = document.getElementsByClassName("liesButton")[0];
var codeButton = document.getElementsByClassName("codeButton")[0];
var codeCloser = document.getElementsByClassName("codeCloser")[0];
var liesCloser = document.getElementsByClassName("liesCloser")[0];
/*var shape = document.getElementById("shape");*/
/*var buttons = document.getElementsByTagName("button");*/
var htmlEl = document.getElementsByTagName("html")[0];
var liesMove = "100,65 100,100 65,100";
var codeMove = "35,0.000001 100,0.000001 100,100 0.000001,100 0.000001,35";
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
	liesLinks.setAttribute("id","linksShow");
	liesCloser.setAttribute("id","closerShow");
	htmlEl.style.overflow = "auto";
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
	codeLinks.setAttribute("id","linksShow");
	codeCloser.setAttribute("id","closerShow");
	htmlEl.style.overflow = "auto";
}

function revert(){
	liesButton.removeAttribute("id");
	codeButton.removeAttribute("id");
	liesLinks.removeAttribute("id");
	codeLinks.removeAttribute("id");
	codeCloser.removeAttribute("id");
	liesCloser.removeAttribute("id");
	htmlEl.style.overflow = "hidden";
	Velocity(shrinkBackground, {
		points: ["100,0 100,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	Velocity(growBackground, {
		points: "100,0 100,0 100,100 0,100 0,100"
	},{
		duration: 500,
		easing: "ease-in",
	});
}
