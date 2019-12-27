const move = Array.from(document.getElementsByClassName('move'));

/*var shrinkBackground = move[0];*/
var growBackground = move[0];

function setIds(idArr) {
	var j = idArr.length;
	for (i = 0; i < j; i++) {
		move[i].setAttribute("id",idArr[i]);
	};
}

var linksContainers = document.getElementsByClassName("linksContainer");
var options = {};
document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(linksContainers, options);
});


function lies(){
	Velocity(growBackground, {
		points: ["100,100 100,100 100,100 100,100 100,100"]
	},{
		duration: 500
	});
	/*Velocity(shrinkBackground, {
		points: [liesMove]["100,100 100,100 100,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});*/
	var liesIds = [
		null, //0 shrinkBackGround
		null, //1 growBackground
		"liesFaderShow", //2 liesFader
		null, //3 codeFader
		null, //4 codeCloser
		"closerShow", //5 liesCloser
		"liesClicked", //6 liesButton
		"codeHide", //7 codeButton
		"linksContainerShow", //8 liesLinksContainer
		"linksShow", //9 liesLinks
		null, //10 codeLinksContainer
		null, //11 codeLinks
		"cornerShow", //12 bottomCorner
		null //13 topCorner
	];
	setIds(liesIds);
}

function code(){
	/*Velocity(shrinkBackground, {
		points: ["100,100 100,100 100,100"]
	},{
		duration: 0
	});*/
	Velocity(growBackground, {
		points: ["1,0.000001 100,0.000001 100,100 0.000001,100 0.000001,1"]
	},{
		duration: 500,
		easing: "ease-in",
	});
	var codeIds = [
	null, //0 shrinkBackGround
	null, //1 growBackground
	null, //2 liesFader
	"codeFaderShow", //3 codeFader
	"closerShow", //4 codeCloser
	null, //5 liesCloser
	"liesHide", //6 liesButton
	"codeClicked", //7 codeButton
	null, //8 liesLinksContainer
	null, //9 liesLinks
	"linksContainerShow", //10 codeLinksContainer
	"linksShow", //11 codeLinks
	null, //12 bottomCorner
	"cornerShow" //13 topCorner
	];
	setIds(codeIds);
}

function revert(){
	var j = move.length;
	for (i = 0; i < j; i++) {
		move[i].removeAttribute("id");
		};

	/*Velocity(shrinkBackground, {
		points: ["100,0.0000001 100,100 0.0000001,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});*/
	Velocity(growBackground, {
		points: ["100,0 100,0 100,100 0,100 0,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});
}
