const move = Array.from(document.getElementsByClassName('move'));
/*var growBackground = document.getElementsByClassName("growBackground")[0];
var shrinkBackground = document.getElementsByClassName("shrinkBackground")[0];*/
/*var liesLinks = document.getElementsByClassName("liesLinks")[0];
var codeLinks = document.getElementsByClassName("codeLinks")[0];
var liesButton = document.getElementsByClassName("liesButton")[0];
var codeButton = document.getElementsByClassName("codeButton")[0];
var codeCloser = document.getElementsByClassName("codeCloser")[0];
var liesCloser = document.getElementsByClassName("liesCloser")[0];
var liesFader = document.getElementsByClassName("liesFader")[0];
var codeFader = document.getElementsByClassName("codeFader")[0];
*/
var shrinkBackground = move[0];
var growBackground = move[1];
function setIds(idArr) {
	for (i = 0; i < 10; i++) {
		move[i].setAttribute("id",idArr[i]);
	};
}
/*var shape = document.getElementById("shape");*/
/*var buttons = document.getElementsByTagName("button");*/
/*function getElements(collection) {
	var length = moves.length;
	var counter = 0;
	while (counter < length) {
		;
		counter++;
	}*/

/*var htmlEl = document.getElementsByTagName("html")[0];
var liesMove = "100,65 100,100 65,100";
var codeMove = "1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1";*/
var linksClass = document.getElementsByClassName("linksClass");
var options = {};
document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(linksClass, options);
});

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
		points: /*[liesMove]*/["100,100 100,100 100,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	/*liesButton.setAttribute("id","liesClicked");
	codeButton.setAttribute("id","codeHide");
	liesLinks.setAttribute("id","linksShow");
	liesCloser.setAttribute("id","closerShow");
	liesFader.setAttribute("id","liesFaderShow");
	/*htmlEl.style.overflow = "auto";*/
	var liesIds = [
		null, //0 shrinkBackGround
		null, //1 growBackground
		"liesFaderShow", //2 liesFader
		null,//3 codeFader
		null, //4 codeCloser
		"closerShow",//5 liesCloser
		"liesClicked",//6liesButton
		"codeHide",//7codeButton
		"linksShow",//8 liesLinks
		null//9 codeLinks
	];
	setIds(liesIds);
}

function code(){
	Velocity(shrinkBackground, {
		points: ["100,100 100,100 100,100"]
	},{
		duration: 0
	});
	Velocity(growBackground, {
		points: ["1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1"]
		//points: ["0.000001,0.000001 100,0.000001 100,100 0.000001,100 0.000001,0.000001"]
		//points: ["35,0.000001 100,0.000001 100,100 0.000001,100 0.000001,35"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	var codeIds = [
	null, //0 shrinkBackGround
	null, //1 growBackground
	null, //2 liesFader
	"codeFaderShow",//3 codeFader
	"closerShow", //4 codeCloser
	null,//5 liesCloser
	"liesHide",//6liesButton
	"codeClicked",//7codeButton
	null,//8 liesLinks
	"linksShow"//9 codeLinks
	];
	setIds(codeIds);
	/*liesButton.setAttribute("id","liesHide");
	codeButton.setAttribute("id","codeClicked");
	codeLinks.setAttribute("id","linksShow");
	codeCloser.setAttribute("id","closerShow");
	codeFader.setAttribute("id","codeFaderShow");
	/*htmlEl.style.overflow = "auto";*/
}

function revert(){
	for (i = 0; i < 10; i++) {
		move[i].removeAttribute("id");
		};
	/*
	liesButton.removeAttribute("id");
	codeButton.removeAttribute("id");
	liesLinks.removeAttribute("id");
	codeLinks.removeAttribute("id");
	codeCloser.removeAttribute("id");
	liesCloser.removeAttribute("id");
	liesFader.removeAttribute("id");
	codeFader.removeAttribute("id");
	/*htmlEl.style.overflow = "hidden";*/
	Velocity(shrinkBackground, {
		points: ["100,0 100,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	Velocity(growBackground, {
		points: ["100,0 100,0 100,100 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
}
