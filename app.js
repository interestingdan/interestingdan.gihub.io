var growBackground = document.getElementById("growBackground");
var shrinkBackground = document.getElementById("shrinkBackground");
var shape = document.getElementById("shape")
var buttons = document.getElementsByTagName("button");
var liesButton = document.getElementsByClassName("liesButton");
var codeButton = document.getElementsByClassName("codeButton");
var liesMove = "100,65 100,100 65,100";
var codeMove = "35,0.000001 100,0.000001 100,100 0.000001,100 0.000001,35"
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
liesButton[0].setAttribute("id","liesClicked");
codeButton[0].setAttribute("id","codeHide");
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
liesButton[0].setAttribute("id","liesHide");
codeButton[0].setAttribute("id","codeClicked");

}
