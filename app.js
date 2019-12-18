const move = Array.from(document.getElementsByClassName('move'));
var shrinkBackground = move[0];
var growBackground = move[1];
function setIds(idArr) {
	for (i = 0; i < 10; i++) {
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
		duration: 0
	});
	Velocity(shrinkBackground, {
		points: /*[liesMove]*/["100,100 100,100 100,100"]
	},{
		duration: 500,
		easing: "ease-in",
	});

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
}

function revert(){
	for (i = 0; i < 10; i++) {
		move[i].removeAttribute("id");
		};

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
